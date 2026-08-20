/**
 * Contract smoke test for the console's API layer. `node scripts/smoke.mjs`, no dependencies.
 *
 * It asserts the things a UI bug would otherwise hide until a customer saw it:
 *
 *  - the two backends expose the same method set (the seam is real, not aspirational)
 *  - suppressed cells arrive as markers and are never mistaken for zero
 *  - every rate carries its denominator
 *  - an unpriced tier refuses checkout with 501 rather than inventing a number
 *  - a gated feature refuses with 402, so the UI can route to billing
 *
 * It does not touch the DOM, so it runs anywhere Node does.
 */
import { MockBackend } from '../public/console/src/api/mock.js';
import { RestBackend } from '../public/console/src/api/rest.js';

let passed = 0;
const failures = [];

function check(label, condition) {
  if (condition) {
    passed += 1;
  } else {
    failures.push(label);
  }
}

async function expectError(label, kind, run) {
  try {
    await run();
    failures.push(`${label} — expected ${kind}, got success`);
  } catch (error) {
    check(`${label} → ${kind}`, error?.kind === kind);
  }
}

const isSuppressed = (v) => Boolean(v && typeof v === 'object' && v.suppressed);
const isRate = (v) => Boolean(v && typeof v === 'object' && 'denominator' in v);

const backend = new MockBackend();

// ---- The seam ---------------------------------------------------------------

const contractMethods = [
  'signIn', 'loadMe', 'signOut', 'orgAnalytics', 'listAdventures', 'adventureAnalytics',
  'exportAnalyticsCSV', 'billingStatus', 'startCheckout', 'billingPortal', 'listInviteCodes',
  'setCredentials',
  // The printable QR. routes.inviteQR existed from the start and nothing ever
  // called it, so the one asset meant to go on paper was unreachable here.
  'inviteQrSvg',
  // Authoring. The mock implements all of these for real, not as stubs — a page
  // that works on one backend and not the other means the seam is decorative.
  'loadAdventure', 'createAdventure', 'updateAdventure', 'addStep', 'updateStep', 'deleteStep',
  'uploadStepReference', 'approveStep', 'preflight', 'publishAdventure', 'archiveAdventure',
  'reviseAdventure',
];
for (const method of contractMethods) {
  check(`MockBackend.${method}`, typeof backend[method] === 'function');
  check(`RestBackend.${method}`, typeof RestBackend.prototype[method] === 'function');
}

// ---- Identity ---------------------------------------------------------------

const auth = await backend.signIn('olaf@nostia.io', 'x');
check('sign-in returns a token', typeof auth.token === 'string' && auth.token.length > 0);
check('sign-in returns memberships', Array.isArray(auth.memberships) && auth.memberships.length > 0);
check('roles are present on every membership', auth.memberships.every((m) => typeof m.role === 'string'));
check('sample data includes a non-owner, so the owner gate is exercised',
  auth.memberships.some((m) => m.role !== 'owner'));

// ---- Analytics with real numbers (org 1) ------------------------------------

const rich = await backend.adventureAnalytics(1, 1);
check('metrics present', Boolean(rich.metrics));
check('starts is a plain number when above threshold', typeof rich.metrics.starts === 'number');
check('completion rate carries n and denominator', isRate(rich.metrics.verified_completion_rate));
check('completion rate denominator is non-zero',
  rich.metrics.verified_completion_rate.denominator > 0);
check('per-stop funnel is populated', rich.per_stop.length > 0);
check('first stop has no drop-off from a previous stop', rich.per_stop[0].drop_off_from_previous === null);
check('versions_available is a list', Array.isArray(rich.versions_available));
check('threshold is reported so the UI can name it', rich.small_n_threshold === 5);

const flagged = rich.per_stop.find((s) => isRate(s.failed_verifications)
  && s.failed_verifications.rate >= 0.4);
check('a stop with heavy verification failure exists to exercise the authoring-problem callout',
  Boolean(flagged));

// ---- Analytics below the threshold (org 2) ----------------------------------

const thin = await backend.adventureAnalytics(2, 5);
check('starts suppresses below threshold', isSuppressed(thin.metrics.starts));
check('suppression marker names the threshold', thin.metrics.starts.threshold === 5);
check('suppression is never the number zero', thin.metrics.starts !== 0);
check('per-stop cells suppress too', thin.per_stop.every((s) => isSuppressed(s.reached)));

const rollup = await backend.orgAnalytics(2);
check('roll-up suppresses as well', rollup.every((r) => isSuppressed(r.starts)));

// ---- Commercial paths -------------------------------------------------------

const billing = await backend.billingStatus(1);
check('billing reports a tier', typeof billing.tier === 'string');
check('billing reports whether it is purchasable', typeof billing.purchasable === 'boolean');
check('no price is present anywhere in the billing payload',
  !JSON.stringify(billing).match(/"(price|amount|currency)"/));
check('unlimited is null, not zero',
  billing.entitlements.adventures === null || billing.entitlements.adventures > 0);

await expectError('checkout for an unpriced tier', 'not-purchasable',
  () => backend.startCheckout(1, 'campus'));
await expectError('billing portal with Stripe unconfigured', 'unavailable',
  () => backend.billingPortal(1));
// Org 2 is on Pilot, which does not include CSV export. Org 1 is Campus, which does —
// so the gate is tested from both sides rather than only from the refusing one.
await expectError('CSV export below the Campus tier', 'entitlement',
  () => backend.exportAnalyticsCSV(2, 5));
await expectError('analytics for an adventure in another organization', 'not-found',
  () => backend.adventureAnalytics(1, 5));

// ---- CSV export, from the allowed side ---------------------------------------

const csv = await backend.exportAnalyticsCSV(1, 1);
check('CSV export is allowed on Campus', csv.blob instanceof Blob);
check('and is named for the adventure and version', /^adventure-1-v1\.csv$/.test(csv.filename));
const csvLines = (await csv.blob.text()).trim().split('\n');
check('every CSV row has the same column count as the header',
  csvLines.every((l) => l.split(',').length === csvLines[0].split(',').length));

// ---- The printable QR --------------------------------------------------------

const qr = await backend.inviteQrSvg(1, 41);
check('invite QR returns SVG source', typeof qr === 'string' && qr.trim().startsWith('<svg'));
check('invite QR is self-contained, so it prints without a network', !/<image|xlink:href/.test(qr));
await expectError('QR for a code that does not exist', 'not-found',
  () => backend.inviteQrSvg(1, 999999));

// ---- Authoring --------------------------------------------------------------
// The rules below are the SERVER's, reproduced in the mock so the editor's real
// screens — "why can't I publish this", "why did my approval disappear" — are
// exercised without a backend.

const draft = await backend.loadAdventure(1, 4);
check('an adventure loads with its stops', Array.isArray(draft.steps) && draft.steps.length > 0);
check('preflight failures ship with the read, not a second call',
  Array.isArray(draft.preflightFailures));
check('a draft with an unanchored stop cannot publish', draft.preflightFailures.length > 0);
check('preflight failures name what to fix',
  draft.preflightFailures.every((f) => typeof f.code === 'string' && typeof f.detail === 'string'));
check('a missing coordinate is reported',
  draft.preflightFailures.some((f) => f.code === 'missing_coordinate'));

await expectError('publishing an adventure that fails preflight', 'conflict',
  () => backend.publishAdventure(1, 4));

// §12: EVERY edit clears approval, including one that changes nothing. A
// conditional that preserved approval on a no-op edit is exactly the code path
// the rule forbids, because "approved" has to mean a human saw THIS version.
const approvedStep = draft.steps.find((s) => s.approved_at);
const reEdited = await backend.updateStep(1, 4, approvedStep.id, {});
check('a no-op edit still clears approval', reEdited.approved_at === null);

const step = await backend.addStep(1, 4, { title: 'New stop', text: 'Stand here.' });
check('a new stop starts unapproved', step.approved_at === null);
check('a new stop starts without a reference photo', step.has_reference === false);
check('stops are ordered as they are added', step.order === 3);

await backend.updateStep(1, 4, step.id, { lat: 42.98, lng: -70.94 });
const uploaded = await backend.uploadStepReference(1, 4, step.id, null);
check('uploading a reference confirms it exists', uploaded.has_reference === true);
check('and never returns the image or a URL to it',
  !JSON.stringify(uploaded).match(/storage_key|url|http/i));

const approved = await backend.approveStep(1, 4, step.id);
check('approving a stop records it', Boolean(approved.step.approved_at));

check('deleting a stop renumbers the rest', await backend.deleteStep(1, 4, step.id) === true);
const afterDelete = await backend.loadAdventure(1, 4);
check('orders stay contiguous after a delete',
  afterDelete.steps.every((s, i) => s.order === i + 1));

// A published adventure is immutable: someone could be standing at stop three.
await expectError('editing a published adventure', 'conflict',
  () => backend.updateAdventure(1, 1, { title: 'Renamed' }));
const published = (await backend.listAdventures(1)).find((a) => a.id === 1);
const revision = await backend.reviseAdventure(1, 1);
check('revising a published adventure produces a new draft',
  revision.status === 'draft' && revision.version === published.version + 1);
check('and leaves the live version published', published.status === 'published');
const revised = await backend.loadAdventure(1, revision.id);
check('a revision carries its stops', revised.steps.length > 0);
check('but none of them arrive pre-approved',
  revised.steps.every((s) => s.approved_at === null));

// The tier is the commercial gate, and it must read as billing (402 → route to
// the plan screen), never as a permission error.
// Org 1 is Campus, where stops and adventures are BOTH unlimited — so the limit has
// to be exercised somewhere it actually binds. Org 3 is on Pilot with no adventures
// yet: it can create one, and then the 5-stop cap bites.
const capped = await backend.createAdventure(3, { title: 'Hall tour' });
await expectError('adding a stop beyond the tier limit', 'entitlement', async () => {
  for (let i = 0; i < 20; i += 1) await backend.addStep(3, capped.id, { title: `Stop ${i}` });
});
// The other half of the same gate: on Campus, neither cap exists, and "unlimited"
// must mean unlimited rather than a large number nobody has reached yet.
const unlimited = await backend.createAdventure(1, { title: 'Long route' });
for (let i = 0; i < 14; i += 1) await backend.addStep(1, unlimited.id, { title: `Stop ${i}` });
check('Campus imposes no stop cap',
  (await backend.loadAdventure(1, unlimited.id)).steps.length === 14);

// Org 2 is on Pilot: one published adventure, and it already has one.
await expectError('creating an adventure beyond the tier limit', 'entitlement',
  () => backend.createAdventure(2, { title: 'A second walk' }));
// A published adventure is immutable regardless of tier, and that check comes
// first — otherwise the answer to "can I edit this?" would depend on billing.
await expectError('adding a stop to a published adventure', 'conflict',
  () => backend.addStep(2, 5, { title: 'Late addition' }));

// ---- Past-due semantics -----------------------------------------------------

const pastDue = await backend.billingStatus(3);
check('a past-due organization still reports its published adventures',
  pastDue.usage.published_adventures > 0);
check('nothing in the payload marks published content as taken down',
  !JSON.stringify(pastDue).includes('unpublished'));
check('a past-due organization cannot publish anything new', pastDue.can_publish === false);

// An expired LOCAL trial still reads `trialing` — Stripe never moved it, because Stripe was never
// involved. `can_publish` is the entitlement gate's own answer and the only field a client may
// trust for "can this organization do the thing".
const lapsed = await backend.billingStatus(2);
check('an expired trial still reports status trialing', lapsed.status === 'trialing');
check('but reports that it cannot publish', lapsed.can_publish === false);
check('and names why', lapsed.blocked_reason === 'trial_expired');
check('an active plan reports that it can publish',
  (await backend.billingStatus(1)).can_publish === true);

// ---- Result -----------------------------------------------------------------

if (failures.length) {
  console.error(`\n${failures.length} failed:\n` + failures.map((f) => `  ✗ ${f}`).join('\n'));
  process.exit(1);
}
console.log(`✓ ${passed} assertions passed`);

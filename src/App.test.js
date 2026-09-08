import { render, screen } from '@testing-library/react';
import App from './App';

// This replaces the untouched create-react-app boilerplate, which asserted the
// presence of a "learn react" link and had been failing for as long as the site
// has had real content.
//
// What it checks is deliberately shallow: the app mounts, the router resolves,
// and the primary navigation is reachable. It is a smoke test, not a redesign
// test — it should keep passing through the whole theme and motion rework, and
// if it fails, something structural broke rather than something visual.

test('the app mounts and renders its primary navigation', () => {
  render(<App />);

  // Nav labels appear in both the desktop bar and the mobile menu, so match all.
  expect(screen.getAllByText(/For Universities/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/For Students/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
});

test('the org sign-in entry point is a real navigation, not a router link', () => {
  render(<App />);

  // The console is a static app served from /console/, outside this router. A
  // react-router <Link> here would render the 404 instead of the console, so
  // this must stay an anchor with a real href.
  const [signIn] = screen.getAllByText(/Org sign in/i);
  expect(signIn.closest('a')).toHaveAttribute('href', '/console/');
});

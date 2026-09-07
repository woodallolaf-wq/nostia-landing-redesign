// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// ---------------------------------------------------------------------------
// jsdom environment gaps.
//
// None of these are application bugs — a real browser provides all three. They
// are stubbed here rather than guarded against in application code, so that
// components stay written for the browser they actually run in.
// ---------------------------------------------------------------------------

// App.js resets scroll position on every route change. jsdom does not implement
// scrollTo, and the resulting throw takes down any test that renders <App />.
window.scrollTo = () => {};

// framer-motion's whileInView observes intersection. jsdom has no
// IntersectionObserver at all, so without this every animated element throws on
// mount.
//
// The stub reports each observed element as immediately in view. That is the
// behaviour tests want: nothing scrolls under jsdom, so a faithful observer
// would never fire, every reveal-on-scroll element would stay hidden, and the
// DOM would be untestable.
class TestIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Set();
  }
  observe(element) {
    this.elements.add(element);
    this.callback([{ target: element, isIntersecting: true, intersectionRatio: 1 }], this);
  }
  unobserve(element) {
    this.elements.delete(element);
  }
  disconnect() {
    this.elements.clear();
  }
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver = TestIntersectionObserver;
global.IntersectionObserver = TestIntersectionObserver;

// prefers-reduced-motion is read through matchMedia, which jsdom does not
// implement. Defaults to not matching, i.e. motion enabled — a test that cares
// about the reduced-motion path should override this and assert both branches.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  });
}

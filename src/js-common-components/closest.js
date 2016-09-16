// matches polyfill
const matchesPolyfill = function applyMatchesPolyfill(proto) {
  const ElementPrototype = proto;
  ElementPrototype.matches = ElementPrototype.matches ||
  ElementPrototype.matchesSelector ||
  ElementPrototype.webkitMatchesSelector ||
  ElementPrototype.msMatchesSelector ||
  function matches(selector) {
    const node = this;
    const nodes = (node.parentNode || node.document).querySelectorAll(selector);
    let i = -1;
    while (nodes[++i] && nodes[i] !== node);
    return !!nodes[i];
  };
};
matchesPolyfill(Element.prototype);

// closest polyfill
const closestPolyfill = function applyClosestPolyfill(proto) {
  const ElementPrototype = proto;
  ElementPrototype.closest = ElementPrototype.closest ||
  function closest(selector) {
    let el = this;
    while (el.matches && !el.matches(selector)) el = el.parentNode;
    return el.matches ? el : null;
  };
};
closestPolyfill(Element.prototype);

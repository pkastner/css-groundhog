import $ from '../js-common-components/dollar';
require('../js-common-components/closest');

// TOOD: Flag for refactoring

const clickTab = (ev) => {
  const target = ev.target;
  const tabContainer = target.closest('.tabs');
  const tabs = tabContainer.querySelectorAll('.tab');
  Array.prototype.forEach.call(tabs, (t) => t.classList.remove('is-active'));
  target.classList.add('is-active');
};

const init = () => {
  $('button.tab').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('click', (ev) => clickTab(ev));
      el.setAttribute('data-initialized', true);
    }
  });
};

init();

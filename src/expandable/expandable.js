import $ from '../js-common-components/dollar';

const toggleClass = 'is-expanded';

const init = () => {
  $('.expandable__trigger').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        el.closest('.expandable').classList.toggle(toggleClass);
      });
      el.setAttribute('data-initialized', true);
    }
  });
};

init();

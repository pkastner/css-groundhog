import $ from '../js-common-components/dollar';

const initData = () => {
  $('select').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        el.classList.add('is-expanded');
      });
      el.addEventListener('blur', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        el.classList.remove('is-expanded');
      });
      el.setAttribute('data-initialized', true);
    }
  });
};

initData();

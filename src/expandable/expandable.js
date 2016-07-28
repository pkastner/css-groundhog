import $ from '../js-common-components/dollar';

const toggleClass = 'is-expanded';

$('.expandable__trigger').forEach(el => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    el.parentNode.classList.toggle(toggleClass);
  });
});

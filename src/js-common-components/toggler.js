import $ from './dollar';

const toggleClass = 'is-active';

$('[data-target]').forEach(el => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    $(el.dataset.target)[0].classList.toggle(toggleClass);
  });
});

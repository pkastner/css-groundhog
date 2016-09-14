import $ from '../js-common-components/dollar';

const toggleClass = 'is-expanded';

const handleClick = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  const trigger = ev.target.closest('.expandable');
  const expandables = trigger.parentNode.querySelectorAll('.expandable');
  Array.prototype.forEach.call(expandables, (el) => {
    if (el !== trigger) {
      el.classList.remove(toggleClass);
    }
    return;
  });
};

const init = () => {
  $('[data-behavior*=accordion] .expandable__trigger').forEach(el => {
    el.addEventListener('click', handleClick);
  });
};

init();

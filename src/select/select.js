import $ from '../js-common-components/dollar';
require('../js-common-components/accordion');

function fetchData(select) {
  const rq = { url: '/assets/data/select_data.json',
    onLoad: (e) => {
      const options = (JSON.parse(e.target.responseText)).options;
      for (let i = 0; i < options.length; i++) {
        const opt = document.createElement('option');
        opt.value = options[i].value;
        opt.innerHTML = options[i].value;
        select.add(opt);
      }
    },
  };

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', rq.onLoad.bind(this));

  xhr.open('GET', rq.url);
  xhr.send();
}


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
      fetchData(el);
      el.setAttribute('data-initialized', true);
    }
  });
};

initData();
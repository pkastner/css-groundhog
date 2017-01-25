import $ from '../js-common-components/dollar';

const init = () => {
  const i = ($('th').length);
  const header = [];
  $('th').forEach(el => {
    header.push(el.textContent);
    if (!el.getAttribute('data-initialized')) {
      el.setAttribute('data-initialized', true);
    }
  });
  let j = i - 1;
  $('td').forEach(cell => {
    cell.setAttribute('data-th', header[i - 1 - j]);
    if (j > 0) {
      j--;
    } else {
      console.log(j);
      j = i - 1;
    }
  });
};

init();

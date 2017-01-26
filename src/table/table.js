import $ from '../js-common-components/dollar';

const fillData = (table) => {
  const th = table.querySelectorAll('th');
  const i = th.length;
  const header = [];
  th.forEach(el => {
    header.push(el.textContent);
  });
  let j = i - 1;
  const td = table.querySelectorAll('td');
  td.forEach(cell => {
    cell.setAttribute('data-th', header[i - 1 - j]);
    if (j > 0) {
      j--;
    } else {
      j = i - 1;
    }
  });
};

const init = () => {
  $('table').forEach(table => {
    if (!table.getAttribute('data-initialized')) {
      table.setAttribute('data-initialized', true);
      fillData(table);
    }
  });
};

init();

import $ from '../js-common-components/dollar';

const fillData = (table) => {
  let th = $('th', table);
  if (!th.length) {
    th = $('thead td', table);
  }
  const header = th.map(el => el.textContent);
  const tr = $('tr', table);
  tr.forEach(row => {
    const td = $('td', row);
    td.forEach((cell, i) => cell.setAttribute('data-th', header[i]));
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

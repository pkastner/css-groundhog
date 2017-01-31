import $ from '../js-common-components/dollar';

const fillData = (table) => {
  const th = [].slice.call(table.querySelectorAll('th'));
  const header = th.map(el => el.textContent);

  th.forEach(el => {
    header.push(el.textContent);
  });
  const tr = [].slice.call(table.querySelectorAll('tr'));
  tr.forEach(row => {
    const td = row.querySelectorAll('td');
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

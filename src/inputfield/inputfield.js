import $ from '../js-common-components/dollar';


function dateFieldChangeHandler() {
  if (isNaN(this.value)) {
    this.classList.remove('inputfield--date--placeholder');
    this.classList.add('inputfield--date');
  } else {
    this.classList.remove('inputfield--date');
    this.classList.add('inputfield--date--placeholder');
  }
}


const validateDate = () => {
  $('input[type=date]').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('keyup', dateFieldChangeHandler);
      el.setAttribute('data-initialized', true);
    }
  });
};


function searchFieldChangeHandler() {
  if (this.value !== '') {
    this.style.backgroundImage = 'none';
  } else {
    this.style.backgroundImage =
'url(/assets/images/icons/Icons_file_002_Search_Magnifying_glass.svg)';
  }
}

const initSearch = () => {
  $('input[type=search]').forEach(el => {
    if (!el.getAttribute('search-initialized')) {
      el.addEventListener('keyup', searchFieldChangeHandler);
      el.setAttribute('search-initialized', true);
    }
  });
};

validateDate();
initSearch();

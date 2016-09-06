import $ from '../js-common-components/dollar';

function colorRangeInput() {
  // this.classList.remove('slider');
  // this.classList.add('slider--js');
  const currentValue = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
`linear-gradient(to right, #00a1b2 0%, #00a1b2 ${currentValue}%,
#ccc ${currentValue}%, #ccc 100%)`;
}

const colorRange = () => {
  $('input[type=range]').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      el.addEventListener('change', colorRangeInput);
      el.setAttribute('data-initialized', true);
    }
  });
};

colorRange();

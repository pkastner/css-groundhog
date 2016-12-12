/*
import $ from '../js-common-components/dollar';
function initData() {
  $.get('select_data.json', function(data => {
    $('body').append(data);
  });
}
const init = () => {
  $('select').forEach(el => {
    if (!el.getAttribute('data-initialized')) {
      initData();
      el.setAttribute('data-initialized', true);
    }
  });
};
initData();
*/

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState == XMLHttpRequest.DONE) {
       if(request.status == 200) {
           document.getElementById("body").innerHTML = request.responseText;
       } else {
           alert(request.status);
       }
    }
};
request.open("GET", "select_data.json", true);
request.send();

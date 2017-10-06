var inputYears = document.querySelector('.year_input');
var btn = document.querySelector('.btn_year');
var date = 17;

function getYearNumber() {
  var val = parseInt(inputYears.value);
  if (val <= date) {
    alert('Вам' + (date - val) + 'лет');
  }
  else {
    alert('fuck');
  }
}
btn.addEventListener('click', getYearNumber);
/*
var p = document.getElementById('text');
var btn = document.getElementById('button')
btn.onclick = function() {
  if (value >= 1 && value <= 20) {
    p.innerHTML = 'Вы в первом подьезде';
  } else if (value >= 21 && value <= 64) {
    p.innerHTML = 'Вы во втором подьезде';
  } else if (value >= 65 && value <= 80) {
    p.innerHTML = 'Вы в третьем подьезде';
  } else {
    p.innerHTML = 'Вы ошиблись подьездом';
  }
}
*/

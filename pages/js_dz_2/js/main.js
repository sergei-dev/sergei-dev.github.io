var inputYears = document.getElementById('input');
var p = document.getElementById('text');
var btn = document.getElementById('button')
inputYears.onkeydown = function() {
  var value = parseInt(inputYears.value);
}
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

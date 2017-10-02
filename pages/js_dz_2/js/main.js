var inputYears = document.getElementById('input');
var values = document.getElementById('input').value;
var p = document.getElementsByTagName('p');

inputYears.onkeydown = function() {
  p.innerHTML = values

}

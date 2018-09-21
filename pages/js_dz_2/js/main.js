var btn = document.querySelector('.btn_year');
var now = new Date();
var currentYear = now.getFullYear();
var twoDigitsCurrentYear = currentYear - 2000;

function getYear() {
  var inputYears = document.querySelector('.year_input');
  var val = parseInt(inputYears.value);
  if (val <= twoDigitsCurrentYear && val > 0) {
    alert(twoDigitsCurrentYear - val);
  }
  else if (val > (twoDigitsCurrentYear + 1) && val <+ currentYear) {
    alert(currentYear - val);
  }
  else if (val < 0) {
    alert('Не корректная дата ввода');
  }
  else {
    alert('Ты нормальный?');
  }
}
btn.addEventListener('click', getYear);

/* Task1 */

function comparisonNumber() {
  var input1 = document.querySelector('#task2 input:nth-child(1)');
  var input2 = document.querySelector('#task2 input:nth-child(2)');
  var val1 = parseInt(input1.value);
  var val2 = parseInt(input2.value);
  if(val1 > val2) {
    alert(val1 + ' больше чем ' + val2);
  }
  else if (val1 == val2) {
    alert(' числа одинаковы и равны ' + val1);
  }
  else {
    alert(val1 + ' меньше чем '  + val2);
  }
}

document.querySelector('#task2 button').addEventListener('click', comparisonNumber);

/* Task2 */
var btn_info = document.querySelector('#task3 button');

function info() {
  var task3_p = document.querySelector('#task3 p');
  var task3_input = document.querySelector('#task3 input').value;
  var value = parseInt(task3_input);
  if (value >= 1 && value <= 20) {
    task3_p.innerHTML = 'Вы в первом подьезде';
  } else if (value >= 21 && value <= 64) {
    task3_p.innerHTML = 'Вы во втором подьезде';
  } else if (value >= 65 && value <= 80) {
    task3_p.innerHTML = 'Вы в третьем подьезде';
  } else {
    task3_p.innerHTML = 'Вы ошиблись подьездом';
  }
}
btn_info.addEventListener('click', info);

/* Task3 */

  var task4_p = document.querySelector('#task4 p');
  var task4_button = document.querySelector('#task4 button');
  
  function validation() {
    var input1 = document.querySelector('#task4 input:nth-child(1)').value;
    var input2 = document.querySelector('#task4 input:nth-child(2)').value;
    var value_password = parseInt(input2);
    if (input1 == 'ivan' && value_password == 333) {
      task4_p.innerHTML = 'Добро пожаловать ' + input1;
    }
    else if (input1 == 'ssss' && value_password == 666) {
      task4_p.innerHTML = 'Добро пожаловать ' + input1;

    }
    else if (input1 == 'gibs' && value_password == 0000) {
      task4_p.innerHTML = 'Добро пожаловать ' + input1;
    }
    else {
       task4_p.innerHTML = 'Ошибка';
    }
  }
  task4_button.addEventListener('click', validation);



/* Task4 */

function comparisonNumberTwo() {
  var input1 = document.querySelector('#task5 input:nth-child(1)');
  var input2 = document.querySelector('#task5 input:nth-child(2)');
  var input3 = document.querySelector('#task5 input:nth-child(3)');
  var val1 = parseInt(input1.value);
  var val2 = parseInt(input2.value);
  var val3 = parseInt(input3.value);
  if(val1 === val2 && val1 === val3) {
      document.querySelector('#task5 p').innerHTML = 'Все равны ' + val1;
    }
    else {
      document.querySelector('#task5 p').innerHTML = Math.max(val1, val2, val3);
    }
  
  
}

document.querySelector('#task5 button').addEventListener('click', comparisonNumberTwo);


/* Task5 */


/* Задачи на цикл For */
 /* Task1 */

 function for_even_numbers() {
   for (var i = 0; i <= 101; i++) {
    if(i % 2 === 0) {
      if (i === 100) {
        document.querySelector('#for_task1 p').innerHTML += i;
      }
      else {
        document.querySelector('#for_task1 p').innerHTML += i + ' ,';
      }
    }
   }
 }
 document.querySelector('#for_task1 button').addEventListener('click', for_even_numbers);

/* Task2 */

function for_inner_numbers() {
  for(var i = 200; i > 0; i--) {
    if (i === 1) {
      document.querySelector('#for_task2 p').innerHTML += i;
    }
    else {
      document.querySelector('#for_task2 p').innerHTML += i + ' ,';
    }
  }
}

document.querySelector('#for_task2 button').addEventListener('click', for_inner_numbers);

/* Task3 */

function sum_of_number() {
  var sum = 0;
  for(var i = 0; i <= 100; i++) {
    sum += i;
  }
  document.querySelector('#for_task3 p').innerHTML = sum;
}

document.querySelector('#for_task3 button').addEventListener('click', sum_of_number);

/* task4 */

function degree_of_number() {
  var input1 = document.querySelector('#for_task4 input:nth-child(1)');
  var input2 = document.querySelector('#for_task4 input:nth-child(2)');
  var val1 = parseInt(input1.value);
  var val2 = parseInt(input2.value);
  var result = 1;
  for(var i = 0; i < val2; i++) {
    result = result * val1;
  }
  document.querySelector('#for_task4 p').innerHTML = result;
}

document.querySelector('#for_task4 button').addEventListener('click', degree_of_number);

/* task5 */

function get_multiplication_table() {
  var result = [];
  for(var i = 1; i < 10; i++) {
    result[i] = '7*'+i+'='+(7*i);
  }
  document.querySelector('#for_task5 p').innerHTML = result;
}
document.querySelector('#for_task5 button').addEventListener('click', get_multiplication_table);

/* task6 */

function get_numbers() {
  var numbers = [];
  for(var i = 0; i <= 50; i++) {
    numbers[i] = i;
  }
  document.querySelector('#for_task6 p').innerHTML = numbers;

}

document.querySelector('#for_task6 button').addEventListener('click', get_numbers);

/* task7 */

function get_special_character() {
  var result = [];
 for(var i = 0; i <= 1000; i++) {
  if(i === 1000) {
    result[i] = '&#' + i+1000;
  }
  else {
    result[i] = '&#' + i+1000 + ';';
  }
 }
  document.querySelector('#for_task7 p').innerHTML = result;
}
document.querySelector('#for_task7 button').addEventListener('click', get_special_character);


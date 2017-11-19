/* task 1 */
const btn_ok = document.querySelector('#OK');
const push_button = document.querySelector('#push_button');
let arr = [1,2,'string',56,120];
const inner_text = document.querySelector('#new');

function get_push_array() {
    inner_text.innerHTML = arr;
}
push_button.addEventListener('click', get_push_array);

/* task 2 */
let innertext = document.querySelector('#two_task p');

const btn_submit = document.querySelector('#button_submit');
const btn_pop = document.querySelector('#pop_button');
const btn_push = document.querySelector('#button_push');
const btn_shift = document.querySelector('#shift_button');
const btn_uns = document.querySelector('#button_uns');

btn_submit.addEventListener('click', submitForm);
function submitForm() {
let index = document.querySelector('#index');
    let value = document.querySelector('#value');
    let readyIndex = parseInt(index.value);
    arr[readyIndex] = value.value;
    inner_text.innerHTML = arr;
}

btn_pop.addEventListener('click', get_pop_array);

function get_pop_array() {
arr.pop();
    if (arr.length === 0) {
    inner_text.innerHTML = '';
  }
    else {
    inner_text.innerHTML = arr;
 }
}
btn_push.addEventListener('click', push_array);

function push_array() {
    let value = document.querySelector('#value');
    arr.push(value.value);
    inner_text.innerHTML = arr;
}

btn_shift.addEventListener('click', get_shift_array);

function get_shift_array() {
    let value = document.querySelector('#value');
    arr.shift();
    console.log(arr);
    if (arr.length === 0) {
    inner_text.innerHTML = arr;
    }
else {
    inner_text.innerHTML = arr;
    }
 }

btn_uns.addEventListener('click', get_unshift_array);

function get_unshift_array() {
    let value = document.querySelector('#value');
    arr.unshift(value.value);
    inner_text.innerHTML = arr;
}

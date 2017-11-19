window.onload = function () {
    /* task 1 */
    let p_all = document.querySelectorAll('p');
    let btn_style_red = document.querySelector('#style_red');
    function get_bg_red() {
        for(let i = 0; i < p_all.length; i++) {
            p_all[i].style.backgroundColor = 'red';
        }
    }
    btn_style_red.addEventListener('click', get_bg_red);

    /* task 2 */
    let images = document.querySelectorAll('img');
    let btn_style_shadow = document.querySelector('#btn_shadow');
    function get_img_shadow() {
        for(let i = 0; i < images.length; i++) {
            images[i].style.boxShadow = '10px 20px 30px skyblue';
        }
    }
    btn_style_shadow.addEventListener('click', get_img_shadow);

    /* task 3 */
    let btn_numeration = document.querySelector('#btn_num');
    function get_numeration() {
        for(let i = 0; i < p_all.length; i++) {
            p_all[i].innerHTML = i + '.' + p_all[i].innerHTML;
        }
    }
    btn_numeration.addEventListener('click', get_numeration);
    /* task 4 */
    let count = 0;
    let btn_targ_one = document.querySelector('#target_one');
    let btn_targ_two = document.querySelector('#target_two');
    let spn_target = document.querySelector('#count');
    function get_target_counter(e) {
        e = e || event;
        let target = e.target;
        if(target.id === 'target_one') {
            count++;
        }
        else if (target.id === 'target_two') {
            count++;
        }
        else {
            alert('error');
        }
        spn_target.innerHTML = 'Было сделано ' + count + ' кликов';
    }
    document.querySelector('#task4').addEventListener('click', get_target_counter);

    /* task 5 */
    let pow_result = document.querySelector('#result_pow');
    let pow_btn = document.querySelector('#btn_pow');
    function get_pow(number,power) {
        let result = Math.pow(number, power);
        pow_result.innerHTML = result;
        return result;
    }
    pow_btn.addEventListener('click', function () {
        get_pow(2,2)
    }, false);

    /* task 6 */

    function get_underline(tag) {
        let tagName = document.querySelectorAll(tag);
        for(let i = 0; i < tagName.length; i++) {
            tagName[i].style.textDecoration = 'underline';
        }
    }
    get_underline('p');
    /* task 7 */
    let btn_age = document.querySelector('#button_age');
    function get_age(age) {
        let age_input = document.querySelector('#input_age');
        age = parseInt(age_input.value);
        let result_age = document.querySelector('#result');
        if(age >= 16) {
            result_age.innerHTML = 'Добро пожаловать';
        }
        else if(age < 16 && age > 0) {
            result_age.innerHTML = 'Вы ещё молоды';
        }
        else if (age < 0) {
            result_age.innerHTML = 'Неккоректный ввод';
        }
        else {
            result_age.innerHTML = 'Введите возраст';
        }
    }

    btn_age.addEventListener('click', get_age);

    /* task 9 */
    let btn_arr = document.querySelector('#task9 button');
    function get_array_length(arr) {
        let result_arr = document.querySelector('#result_array');
        arr = [1,2,3,4,5,6];
        let result = arr.length;
        if (!result) {
            result_arr.innerHTML = 'В массиве не найденно элементов';
        }
        else {
            result_arr.innerHTML = result;
        }
    }
    btn_arr.addEventListener('click', get_array_length);

    /* task 10 */
    let btn_num = document.querySelector('#task10 button');
    function return_numbers() {
        let input_num = document.querySelector('#task10 input');
        let value = parseInt(input_num.value);
        if(value < 7) {
            return('число меньше 7');
        }

        else if (value > 10) {
            return(value *= value);
        }
        else {
            return(--value);
        }
    }
    btn_num.onclick = function () {
        let return_result = document.querySelector('#result_numbers');
        return_result.innerHTML = return_numbers();
    };

    /* task 11 */
    let btn_random = document.querySelector('#rand_btn');
    let random_num = Math.floor((Math.random() * 10) + 1);
    let result_attempts = document.querySelector('#attempts_result');
    let attempts_counter = 3;
    result_attempts.innerHTML = `Попыток осталось ${attempts_counter}`;
    function get_num_random(e) {
        e = e || event;
        let target = e.target;
        let random_result = document.querySelector('#result_random');
        let user_num = parseInt(document.querySelector('#num_user').value);
        if(target.id === 'rand_btn') {
            attempts_counter--;
            if(user_num === random_num) {
                random_result.innerHTML = 'Поздравляю!Вы угадали число';
                btn_random.style.display = 'none';
            }
            else if(user_num > random_num) {
                random_result.innerHTML = 'Число больше чем нужно';
            }
            else if(user_num < random_num) {
                random_result.innerHTML = 'Число меньше чем нужно';
            }
        }
        if(attempts_counter === 0) {
            btn_random.style.display = 'none';
            random_result.innerHTML = 'У вас кончились попытки,игра окончена';
        }

        result_attempts.innerHTML = attempts_counter;

    }

    btn_random.addEventListener('click', get_num_random);


};
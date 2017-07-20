$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header_top_line').addClass('scroll_header_top_line');
        }
        if ($(this).scrollTop() < 50 && $('.header_top_line').hasClass('scroll_header_top_line')) {
            $('.header_top_line').removeClass('scroll_header_top_line');
        }
    });


    $('.modal_menu a').on('click', function(e) {
        e.preventDefault();
        var selector = $(this).attr('href');
        var h = $(selector);
        $('body').animate({
            scrollTop: h.offset().top
        }, 600);
    });
    $('.menu_header a').on('click', function(e) {
        e.preventDefault();
        var selector = $(this).attr('href');
        var h = $(selector);
        $('body').animate({
            scrollTop: h.offset().top
        }, 600);
    });



    $('.menu_link_button').on('click', function(event) {
        event.preventDefault();
        $('.modal_menu').toggleClass('modal_menu_active');
        $('.span_link').toggleClass('span_link_active');
        $('.span_link_two').toggleClass('one_link_active');
        $('.span_link_three').toggleClass('two_link_active');
    });
    $('.modal_menu a').on('click', function(e) {
        e.preventDefault();
        $('.modal_menu').removeClass('modal_menu_active');
        $('.span_link').removeClass('span_link_active');
        $('.span_link_two').removeClass('one_link_active');
        $('.span_link_three').removeClass('two_link_active');

    });

    new WOW().init();

});



window.onload = function(event) {
    var a = document.querySelectorAll('a');
    var buttonUp = document.querySelector('.button_up_window');
    var click_checkbox = document.querySelector('.checkbox_click');
    var cont_form_payments = document.querySelector('.container_list_form_payments');
    var label_check = document.querySelector('.lbl');
    var input_tel_new = document.createElement('input');
    input_tel_new.setAttribute('placeholder', 'Телефон');
    input_tel_new.className = 'input_contact';
    var tel_button = document.querySelector('.add_tel');
    var input_block = document.querySelector('.input_one_block');
    var up = document.querySelector('.up_fixed');

    a.onclick = function(event) {
        event.preventDefault();
    };

    tel_button.onclick = function(e) {
        e.preventDefault();
        input_block.appendChild(input_tel_new);
        this.remove();
    };

    click_checkbox.onchange = function() {
        if (click_checkbox.checked == false) {
            if (cont_form_payments.style.display == 'flex') {
                cont_form_payments.style.display = 'none';

            }


        } else {
            cont_form_payments.style.display = 'flex';

        }





    };
    buttonUp.onclick = function(e) {
         var selector = this.setAttribute('href');
         var hf = selector;
         document.querySelector('body');
    };

   



};
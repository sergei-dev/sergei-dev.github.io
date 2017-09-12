 $(function() {
   $(".dial").knob({
     'inputColor': '#3c4761',
     'fontWeight': 'ligth',
     'fontSize': '50'
   });

   $(".tabs_item").not(":first").hide();
   $(".controlls").click(function() {
     $(".controlls").removeClass("button_controlls_active").eq($(this).index()).addClass("button_controlls_active");
     $(".tabs_item").hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass("button_controlls_active");

   $('.bars').on('click', function(e) {
     e.preventDefault();
     $('.nav_mobile').slideToggle();
   });

   $(window).scroll(function() {
     if ($(this).scrollTop() > 30) {
       $('.header_top_line').addClass('header_fixed');

     } else {
       $('.header_top_line').removeClass('header_fixed');
     }
   });

   $(".nav_menu, .nav_mobile").on("click", "a", function(event) {
     //отменяем стандартную обработку нажатия по ссылке

     event.preventDefault();

     //забираем идентификатор бока с атрибута href

     var id = $(this).attr('href'),

       //узнаем высоту от начала страницы до блока на который ссылается якорь

       top = $(id).offset().top;

     //анимируем переход на расстояние - top за 1500 мс

     $('body,html').animate({
       scrollTop: top
     }, 1500);

     $('.nav_mobile').slideUp();

   });


   $('#form').validate({
     rules: {

       name: {

         required: true,

         minlength: 10

       },
       message: {
         required: true,
         minlength: 100
       }

     },

     messages: {

       name: {

         required: "Поле 'Имя' обязательно к заполнению",

         minlength: "Введите не менее 10-х символов в поле 'Имя'"

       },

       email: {

         required: "Поле 'Email' обязательно к заполнению",

         email: "Необходим формат адреса email"

       },
       message: {

         required: "Поле 'Сообщение' обязательно к заполнению",

        minlength: "Введите не менее 100-х символов в поле 'Сообщение'"

       }



     }
   });

 });

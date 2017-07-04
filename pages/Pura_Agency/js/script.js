$(document).ready(function() {
$('.menu_link_button').on('click',function(event){
	 event.preventDefault();
	    $('.modal_menu').toggleClass('modal_menu_active');
       $('.span_link').toggleClass('span_link_active');
       $('.span_link_two').toggleClass('one_link_active');
          $('.span_link_three').toggleClass('two_link_active');
         

         

      
       


      });

});
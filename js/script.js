$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});




$(document).ready(main);
var cont = 1;
function main () {
 $('.menu-fixo').click(function(){
  if (cont == 1) {
   $('nav').animate({
    left: '0'
   });
   cont = 0;
  } else {
   cont = 1;
   $('nav').animate({
    left: '-100%'
   });
  }
 });
 // Mobile
 $('.submenu').click(function(){
  $(this).children('.children').slideToggle();
 });
}


$(function () {
    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });
});

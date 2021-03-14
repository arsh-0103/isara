$(function(){
  

    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#scroll-btn').fadeIn(600);
        }
        else {
            $('#scroll-btn').fadeOut(600);
        }
    });

    $("#scroll-btn").click(function () {
    $('html, body').animate({ 'scrollTop': 0 }, 500,);
   });


   $('.scroll-down-btn').click(function(){
       var position = $('.scroll-point').offset().top;
    $('html, body').animate({ 'scrollTop': position }, 500);
   });


   $('.js-question-title').on('click',function(){
    $(this).next().slideToggle(200,);
    $(this).find('.fa-chevron-down').toggleClass('q-open');
  });


  $('.js-flow-icon-14').on('click',function(){
    var w = $(window).width();
    var x = 768;
    $(this).next().slideToggle(200,);
    $(this).find('.fa-chevron-down').toggleClass('q-open');

  });


});


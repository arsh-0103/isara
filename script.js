$(function(){
  
    $("#scroll-btn").click(function () {
    $('html, body').animate({ 'scrollTop': 0 }, 500,'swing');
   });



   $('.js-question-title').on('click',function(){
    $(this).next().slideToggle(200);
  });


});


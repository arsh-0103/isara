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
    $('html, body').animate({ 'scrollTop': 0 }, 500,'swing');
   });



   $('.js-question-title').on('click',function(){
    $(this).next().slideToggle(200);
  });


});


$(function(){
    $("#scroll-btn").click(function () {
    $('html, body').animate({ 'scrollTop': 0 }, 500,'swing');
});

    $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });


  $('.js-question-title').on('click',function(){
    $('.answer').slideToggle(200);
    $(this).toggleClass('open', 200); 
  });

});


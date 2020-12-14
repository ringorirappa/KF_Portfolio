$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');

    if($('.header-nav').hasClass('off')){
      $('.header-nav').removeClass('off');
      $('.header-nav').animate({'marginRight':'0px'},300).addClass('on');
    }else{
      $('.header-nav').addClass('off');
      $('.header-nav').animate({'marginRight':'40%'},300);
    }

    $('.layer').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });

});
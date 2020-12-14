$(function () {
  //ハンバーガーメニュー
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("active");
    $('body').addClass('noscroll');

    if ($(this).hasClass("active")) {
      $(".hamburger").addClass("active");
    } else {
      $(".hamburger").removeClass("active");
    }
  });
  $(".hamburger__list, .hamburger").click(function () {
    $(".hamburger,.hamburger-btn").removeClass("active");
    $('body').removeClass('noscroll');
  });

  $(".hamburger-btn").click(function () {
    if (!($(this).hasClass("active"))) {
      $('body').removeClass('noscroll');
    }
  });

  // ページトップ
  $('.page-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 'fast');
    return false;
  });
});

ScrollReveal().reveal('.scroll', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 100, //実行されるまでの時間
  interval: 100, //インターバルの時間
  opacity: 0, //表示前の透明度
  origin: 'bottom', //要素の表示される方向『top,right,bottom,left』
  mobile: true, //モバイル対応
});

$(function(){

  $('a[href^=#]').click(function() {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


  //ボタンをクリックすると
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active'); //ボタンにactiveクラスを付与

    $('.nav-sp').fadeToggle(500); //ナビビューが0.5秒かけてフェードイン
    $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
  });

  //デバイスの幅が560以下のとき
  if( $(window).width() < 560 ){
    //.nav-sp>li>aをクリックすると
    $('.nav-sp>ul>li>a, .close-box, .nav-sp').on('click',function(){
    $('.nav-sp').fadeOut(500); //.nav-spが0.5秒でフェードアウト(メニューのフェードアウト)
    $('.btn-trigger').removeClass('active'); //.btn_triggerのactiveクラスを削除
    $('body').removeClass('noscroll'); //bodyのnoscrollクラスを削除
    });
  };
});

/* ページトップ */
$(function(){

  $('#page-top').hide();
  //画面をスクロールしたとき
  $(window).scroll(function() {
      //1000pxより多くスクロールした場合
      if($(this).scrollTop() > 500) {
          $('#page-top').fadeIn(); //ボタンをフェードインさせる
      } else {
          $('#page-top').fadeOut(); //ボタンをフェードアウトさせる
      }
  });
  //ページトップボタンをクリックすると
  $('#page-top').click(function(){
  $('html, body').animate({scrollTop: 0}, 300); //最上部に戻る
  });

  // Scroll Revealで画像をふわっと表示
  ScrollReveal().reveal('.container', {
    duration: 1500, // アニメーションの完了にかかる時間
    delay: 100, //実行されるまでの時間
    reset: false, // 何回もアニメーション表示するか
    opacity: 0, //表示前の透明度
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  });
});


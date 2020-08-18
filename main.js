// ドロップダウンリスト
$(function(){
  $('.section').hide();

  $('.list').on('click',function(){
    $('.section').not($($(this).attr('href'))).hide();

    // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
    $($(this).attr('href')).fadeToggle(10);

    // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
    // $($(this).attr('href')).show();
  });
});

// スムーススクロール
$(function() {
  let topBtn = $('.scrollbtn');
  topBtn.hide();
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップへ戻る
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
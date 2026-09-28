/*-------------------------
作品画像をタップして関連画像を表示
--------------------------*/

$(function() {

    $('.top-item a[data-featherlight]').on('click', function(e) {
        e.preventDefault();

        var targetId = $(this).attr('data-featherlight');
        var $target = $(targetId);

        if (!$target.length) {
            console.log('関連画像が見つかりません:', targetId);
            return;
        }

        // クローンを作成し、非表示クラスを除去して強制的に表示状態にする
        var $content = $target.clone().removeClass('featherlight-item').show();
        $content.find('.featherlight-content').show();
        $content.find('img').show();

        // Featherlightを起動
        $.featherlight($content, {
            closeOnClick: 'background',
            closeOnEsc: true
        });
    });

});

/*-------------------------
モバイルの時のボタン
--------------------------*/
$(".btn-trigger").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".header-nav").fadeToggle(500);
});


/*-------------------------
スタートの時、上から順番表示
--------------------------*/

var element = $('ul li.top-item');
//element.css({'opacity': '0'});

$(window).on('load', function() {
		var timer;
		var counter = 0;
		timer = setInterval(function(){
			$(element[counter]).animate({'opacity': '1'}, 500);
			counter++;
			if(counter >= element.length){
				clearInterval(timer);
			}
		}, 170)
})

// JavaScript Document
$(function(){
　$(window).scroll(function (){
    $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('effect-scroll');
        }
    });
　});
});

//-----------page-top-btn-------------------//

$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 200) {
    $('.pagetop').fadeIn("slow");
  } else {
    $('.pagetop').fadeOut('slow');
  }
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// modal
$('.modal').modaal();

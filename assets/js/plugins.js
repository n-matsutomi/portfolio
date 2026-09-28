$(document).ready(function() {
     $("nav,navbar,.grid,.breadcrumb,img,.container-fluid,.about,footer").show();
});

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// external js: isotope.pkgd.js

$( function() {
  
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: false,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer'
    }
  })  
});


$(document).ready(function(){
	$("#loader").fakeLoader({
		timeToHide:1000,
		zIndex:99999,
		bgColor:"#fff",
		spinner:"spinner2",
		pos:'fixed',// Default Position
		top:'0px',  // Default Top value
		left:'0px', // Default Left value
		width:'100%', // Default width 
		height:'100%', // Default Height

	});
});

// Fades out the whole page when clicking links  
 
 $(document).ready(function(){

//
$('body').css('display', 'none');
$('body').fadeIn(500);
}); 

//
function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}

//
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
window.onpageshow = function(evt) {
if (evt.persisted) {
document.body.style.display = "none";
location.reload();
}};}


/* Contact Form Validation Code  */

    function checkEmpty(selector) {
        if (selector.val()=="" || selector.val()==selector.prop("placeholder")) {
          selector.addClass('formFieldError',500);
          return false;
        } else {
          selector.removeClass('formFieldError',500); 
          return true;
        }
    }
    function validateEmail(email) {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (!regex.test(email.val())) {
          email.addClass('formFieldError',500); 
          return false;
        } else {
          email.removeClass('formFieldError',500); 
          return true;
        }
    }

    $('.contact-form').submit(function () {
      var $this = $(this),
          result = true;

      if(!checkEmpty($this.find('#fname'))){
        result=false;
      }
      if(!validateEmail($this.find('#email'))) {
        result=false;
      }
      if(!checkEmpty($this.find('#mssg'))) {
        result=false;
      }
      
      if(result==false) {
        return false;
      }

      var $btn = $("#send").button('loading');

      var data = $this.serialize();

      $.ajax({
          url: "sender.php", 
          type: "POST",        
          data: data,     
          cache: false,
          success: function (html) {
          	console.log(html);
              if (html==1) {
                  $('#result-message').addClass('alert alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>メッセージを送信しました！ </strong> 通常お問い合わせ頂いてから2〜3営業日内を目安にご回答させて頂いております。').delay(500).slideDown(500).delay(10000).slideUp('slow');

                  $btn.button('reset');
                  
              } else {
                  $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> 送信出来ませんでした！もう一度やり直してください').delay(500).slideDown(500).delay(10000).slideUp('slow');
                  $btn.button('reset');
              }
          },
          error: function (a, b) {
            if (b == 'error') {
              $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> 送信出来ませんでした！もう一度やり直してください').delay(500).slideDown(500).delay(10000).slideUp('slow');
            };
            $btn.button('reset');
          }
      });

      return false;
    });
	
	
/* blur on modal open, unblur on close */
$('#myModal').on('show.bs.modal', function () {
   $('.container-fluid,#container-header,.carouselWrapper,#bx-pager').addClass('blur');
})

$('#myModal').on('hide.bs.modal', function () {
   $('.container-fluid,#container-header,.carouselWrapper,#bx-pager').removeClass('blur');
})


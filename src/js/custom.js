
$(document).ready(function(){					   
    /*scrollTop*/
      $('body').scroll({target: ".section", offset: 50});   
      $("#scrolltop a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
	  
	//logo popup
	$("a#logo").on("contextmenu", function(e) {
	  e.preventDefault();
	  var targetModal = $(this).data('target');
	  $(targetModal).modal("show");
	})
	
	
	if($('body').hasClass('non_mobile')){
    $("#accordion .panelTab").on('click', function() {
    if (!$(this).parents('.panel').is('.active')) {
    $(this).parents('.panel').animate({
    width: "419px"
    }, 500, function (){ 
    if( $(this).hasClass('search') ) {
    $('input#SearchInput').focus();
    };
    }).addClass('active').siblings('.panel').animate({
    width: "35px"
    }, 500).removeClass('active');
    } else {
    $('#accordion .panel').removeClass('active').animate({
    width: "35px"
    }, 419);
    }
    }); 
    };

/*cookie*/
$("#agree_cookie_terms").click(function(){
  $("#cookiesModal").slideUp("slow");
$(".wrap").css("padding-top","121px");
setCookie("user_accepted_cookie_policy", "yes", 100);
});

if(getCookie("user_accepted_cookie_policy")=="yes")
$("#cookiesModal").css('display','none');


$(".popupArrowup").click(function(){
$(".dsaPopupBlock").slideDown("slow");
});

$(".closeButton").click(function(){
if($(".dsaPopupBlock").is(":visible"))
$(".dsaPopupBlock").slideUp("slow");
else
$(".popupContentHolder").slideUp("slow");
});

/*fixed heade*/
var header = $("#header");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100 && $(this).width() > 769) {
        header.addClass("navbar-fixed-top");
    } else {
        header.removeClass('navbar-fixed-top');
    }
});	  
    });
 
 $(function(){
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };

    if(!is_touch_device() && $('.navbar-toggle:hidden')){
      $('.dropdown-menu', this).css('margin-top',0);
      $('.dropdown .dropdown-toggle').hover(function(){ 
          $(this).trigger('click').toggleClass("disabled"); 
      });			
    }
});

 /*For Navigation Active Status*/	
 $('div#sidebarnav ul ul li,div#sidebarnav ul.news li,div#sidebarnav ul.collapsible li').has('ul').children('ul').css('display','none');
 $('div#sidebarnav ul li.level3.active,div#sidebarnav ul.news li.current-cat').parents('ul').css('display','block');
 $('div#sidebarnav ul.collapsible li.active').parent('ul').css('display','block');
 $('div#sidebarnav ul.collapsible li.active').parents('ul').css('display','block');
 $('div#sidebarnav ul li').has('ul').children('a').append('<span class="sprit dropdown"></span>');
 
 $('div#sidebarnav ul ul li,div#sidebarnav ul.news li,div#sidebarnav ul:not(.with_landing) li').has('ul:not(.with_landing)').children('a').click(function (e){
   if($( "div#sidebarnav ul" ).hasClass( "with_landing" )===false){
     e.preventDefault();
     $(this).parent('li').toggleClass('current-cat-parent');
     $(this).parent('li').children('ul').slideToggle();
     $(this).children('span.dropdown').toggleClass('open');
   }
   
 });

/*home page book popup*/
function bookView(url){
  //ga('send', 'event', 'Book Share', 'click', window.location.href);
  $('div#iframeContainer').html("");
  $('<iframe src="'+url+'" id="bookViewDetail" name="myframe" width="100%" scrolling="no" frameborder="0" onload="resizeIframe(this)"></iframe>').appendTo('div#iframeContainer');
  
	$("#bookViewDetail").height(400);
}

/*Mobile Device Detection, source: http://www.abeautifulsite.net/blog/2011/11/detecting-mobile-devices-with-javascript/*/
var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()){ $('body').addClass('mobile');} else { $('body').addClass('non_mobile');}

// IE10 bug fixed for link disbale on desktop device.
var width = $(window).width();
if (width >= 1024) {

    // refer link to nothing
    $("a.disable-links").attr('href', 'javascript:;'); 
}

	function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

 
 
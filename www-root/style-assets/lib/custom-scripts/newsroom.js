$(document).ready(function() {
	var mainNavId = $("#main-news-nav");
	var navbarId = $("#newsroom-nav.newsroom-nav-container");
	var navbarHeader = $("#nav-header");
	var navbarCollapse = $("#navbar-collapse-1");
	var headerElement = $("#nav-h3");
	var navRight = $("#nav-right");
	var navLeft = $("#nav-left");
	var brandLogo = $("#newsroom-logo");
	var newsHero = $("#newsroom-hero");
	var isStuck = false; 

	function stickyNavbar() {
		$(window).scroll(function() {
			if( $(window).scrollTop() >= 35) {
				if(!isStuck) {
					isStuck = true;
					mainNavId.addClass('navbar-fixed-top');
					navbarId.css("height", "150px");
					headerElement.css("display", "none");
					navRight.css({"margin-top": "0px", "display": "inline-block", "position": "relative", "top": "-50px"});
					navRight.removeClass("navbar-right");
					navLeft.css({"padding-top": "50px", "padding-right": "50px", "display": "inline-block", "float": "none"});
					navLeft.removeClass("navbar-left");
					brandLogo.css({"max-width" :"120px", "padding-top" :"0px"});
					newsHero.css("padding-top", "158px");
					navbarCollapse.css({"position": "relative", "right": "0px", "text-align": "right"});
					navbarHeader.css({"width": "150px"});
					console.log("is stuck");
				}
				
			} else {
				if(isStuck) {
					mainNavId.removeClass('navbar-fixed-top');
					navRight.addClass("navbar-right");
					navLeft.addClass("navbar-left");
					navbarId.removeAttr("style");
					headerElement.removeAttr("style");
					navRight.removeAttr("style");
					navLeft.removeAttr("style");
					brandLogo.removeAttr("style");
					newsHero.removeAttr("style");
					navbarCollapse.removeAttr("style");
					navbarHeader.removeAttr("style");
					isStuck = false;
				}
			}
		});
	} 

	if( $(window).width() > 992) {
		stickyNavbar();
	} else {
		// alert("the window is under the threshold");
	}

	$(window).on('resize', function() {
		if( $(window).width() > 992) {
			stickyNavbar();
		} else {
			// alert("the window is under the threshold");
		}
	});

});
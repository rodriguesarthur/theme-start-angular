$(document).ready(function(){

	//ANIMATE SCROLL-PAGE
	$(window).scroll(function(){
		if ($(document).scrollTop() > 100) {
			$('#menu-fixed').css('top','0');
			$('#box-btn-up').css('bottom','15px');
		} else {
			$('#menu-fixed').css('top','-50px');
			$('#box-btn-up').css('bottom','-50px');
		};

		if ($(document).scrollTop() > 200) {
			$('#services span').css('background-color','#fed136');
			$('#services h2').css('color','#000');
			$('#services p').css('color','#868e96');
		};

	});

	$('#box-btn-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('#btn-bars').click(function(){
		$('#menu-slider').toggleClass('open');
	});

	$('#slide-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('#down-page').click(function(){
		$('html, body').animate({
			scrollTop: $('div#services').offset().top
		}, 1000);
	});

	// LINKS NAV
	$("#link-services").click(function(){
		//$("html").animate({scrollTop: 800}, 1000);
		//$(document).scrollTo("#services");
		$('html, body').animate({
			scrollTop: $("div#services").offset().top
		}, 1000)
	});

	$("#link-services-fixed").click(function(){
		$('html, body').animate({
			scrollTop: $("div#services").offset().top
		}, 1000)
	});

	$("#link-services-mobile").click(function(){
		$('html, body').animate({
			scrollTop: $("div#services").offset().top
		}, 1000);
		$('#menu-slider').removeClass('open');
	})

	$('#link-team').click(function(){
		$('html, body').animate({
			scrollTop: $('div#team').offset().top
		}, 1000)
	});

	$('#link-team-fixed').click(function(){
		$('html, body').animate({
			scrollTop: $('div#team').offset().top
		}, 1000);
	});

	$('#link-team-mobile').click(function(){
		$('html, body').animate({
			scrollTop: $('div#team').offset().top
		}, 1000);
		$('#menu-slider').removeClass('open');
	});

	$('#link-portfolio').click(function(){
		$('html, body').animate({
			scrollTop: $('div#portfolio').offset().top
		}, 1000)
	});

	$('#link-portfolio-fixed').click(function(){
		$('html, body').animate({
			scrollTop: $('div#portfolio').offset().top
		}, 1000);
	});

	$('#link-portfolio-mobile').click(function(){
		$('html, body').animate({
			scrollTop: $('div#portfolio').offset().top
		}, 1000);
		$('#menu-slider').removeClass('open');
	});

	//ANIMATE SPAN SERVICES
	$("#services span").on("mouseover" , function(){
		$(this).css("background-color","#e3b928");
	}).on("mouseout", function(){
		$(this).css("background-color","#fed136");
	});

	//OPEN BOX IMAGE
	$('#portfolio .images-portfolio img').click(function(){
		var image = $(this).attr('src');
		var title = $(this).attr('alt');

		$('#portfolio').addClass('open-box-image');
		$('#image-open img').attr({'src':image});
	});

	$('#image-open .close-box-image').click(function(){
		$('#portfolio').removeClass('open-box-image');
	});

	$('#image-open .close-box-image').click(function(){
		$('#portfolio').removeClass('open-box-image');
	});

	$('#portfolio .mask-image-open').click(function(){
		$('#portfolio').removeClass('open-box-image');
	});

})
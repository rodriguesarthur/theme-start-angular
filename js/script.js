$(document).ready(function(){

	//$("html").animate({scrollTop: 0}, 1000);

	$(window).scroll(function(){
		if ($(document).scrollTop() > 100) {
			$('#menu-fixed').css('top','0');
		} else {
			$('#menu-fixed').css('top','-50px');
		};

		if ($(document).scrollTop() > 200) {
			$('#services span').css('background-color','#fed136');
			$('#services h2').css('color','#000');
			$('#services p').css('color','#868e96');
		};
	});

	$('#btn-bars').click(function(){
		$('#menu-slider').toggleClass('open');
	});

	$('#slide-top').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

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

	$("#services span").on("mouseover" , function(){
		// $("#services .icones span").addClass("estilomouse");
		$(this).css("background-color","#e3b928");
	}).on("mouseout", function(){
		$(this).css("background-color","#fed136");
	});
})
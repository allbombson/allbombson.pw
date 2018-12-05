(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");

		particlesJS.load('particles-js', 'js/assets/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
	});

	 $("#sendButton").click(function(){
    	$("#messageStatus").text("Sending...");
        subject=$("#subjectBox").val();
        text= "Email: " + $("#emailBox").val() + "\n\nSubject: " + $("#subjectBox").val() +  "\n\nName: " + $("#nameBox").val() + "\n\nMessage: \n" + $("#bodyBox").val();
        $("#message").text("Sending your message...");
        $.get("http://138.68.52.132:3000/send",{to:"none",subject:subject,text:text},function(data){
			if(data=="sent")
			{
			    $("#messageStatus").text("Your Message Has Been Received!");
			}else{
			    $("#messageStatus").text("There was an issue sending your message");
			}

		clearContactFeilds();
			
		});
	});

	 function clearContactFeilds(){
	
		$('#bodyBox').val('');
		$('#nameBox').val('');
		$('#emailBox').val('');
		$('#subjectBox').val('');
	
	}

	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);


$(document).ready(function(){

	$(".nav-toggle").click(function(evt) {
		evt.preventDefault();
		$(".main-list").slideToggle(500);
	});

	$(".ion-chevron-down").click (function (){
		$(this).parent("a").parent("li").toggleClass('main-active');
		$(this).parent("a").next(".sub-list").slideToggle(400);
		if($(this).parent("a").parent("li").hasClass('main-active')) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
			$(this).hover().show();
		}
	});

	$(window).resize(function() {
     if ( $(window).width() > 768 ) {
       $(".main-list").removeAttr('style');
       $(".sub-list").removeAttr('style');
       $(".ion-chevron-down").removeAttr('style');
       $("li").removeClass('main-active');
     }
  });
});



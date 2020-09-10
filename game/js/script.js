$(document).ready(function(){
	/*Для плавного перехода к якорю*/
	$("body").on('click', '[href*="#"]', function(e){
  	var fixed_offset = 10;
 	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  	e.preventDefault();
	});


	/*Менюшка*/
    $('.ham1').click(function(){
    $('.sublime-menu__background').toggleClass('sublime-menu__background-active');
	});



	$("body").on('click', '[href*="#"]', function(){
	$('.sublime-menu__background').toggleClass('sublime-menu__background-active');
	});
});
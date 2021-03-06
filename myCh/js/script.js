$(document).ready(function(){
$(".slider").slick({
	/*включаем стрелки*/
	arrows:true,
	/*включаем кнопки*/
	dots:true,
	/* включаем адаптивную высоту(кнопки и 
	стрелки подстраиваются под высоту картинки)*/
	adaptiveHeight:true,
	/*количество изображений на экране*/
	slidesToShow: 1,
	/*сколько изображений скролиться за раз*/
	slidesToScroll:1,
	/*скорость пролистывания картинок*/
	speed:500,
	/*рисунок смены сдайда*/
	easing:"ease",
	/*будет ли слайдер бесконечным*/
	infinite:false,
	/*стартовый слайд*/
	initialSlide:0,
	/*автоматически пролистывает слайды*/
	autoplay:false,
	/*скорость автоматического пролистывания слайдов*/
	autoplaySpeed:2000,
	pauseOnFocus:true,
	pauseOnHover:true,
	pauseOnDotsHover:true,
	/*отключаем для пк перетаскивание элементов с помощью мышки*/
	draggable:false,
	/*отключаем для телефонов перетаскивание 
	элементов с помощью пальца(false)*/
	swipe:true,
	/*как далеко нужно свайпнуть, чтобы 
	слайд перешел на другую картинку*/
	touchThreshold:10,
	/*все возможности для перетаскивания слайда*/
	touchMove:true,
	/*дает задержку перед переходом на другой сдайд
	(если включена, то разницы нет в количестве кликов по стрелке)*/
	waitForAnimate:false,
	/*слайд устанавливается точно по центру*/
	centerMode:false,
	/*Перестает автоматически подсчитывать ширину
	(кароч видны лишние картинки во весь блок)*/
	variableWidth:false,
	/*сколько то рядов из слайдов*/
	rows:1,
	/*сколько будет слайдов в каждом ряду*/
	slidesPerRow:1,
	/*делает слайдер вертикальным*/
	vertical:false,
	verticalSwiping:false,
	appendArrows:$(".slider"),
	appendDots:$(".slider"),
});







$(".header-wrapper__nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

$(".header-container-wrapper__button").on("click","button", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
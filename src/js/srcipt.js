window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {

		menu.classList.toggle('menu_active');



		hamburger.classList.toggle('hamburger_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {

			menu.classList.toggle('menu_active');
			hamburger.classList.toggle('hamburger_active');
		});
	});
});

$(document).ready(function () {
	$('.reviews__carousel').slick({
		centerMode:true,
		 slidesToShow: 3,
		dots: true,
		speed: 900,
		infinite:false,
		focusOnSelect: true,
		centerPadding: 0,




		responsive: [
			{
				breakpoint:992,
				settings:{
					slidesToShow: 1,
					dots:false,
	
				}
			}
		]

	});
	

	$('.reviews__carousel').slick('goTo', 1);

	

}); 



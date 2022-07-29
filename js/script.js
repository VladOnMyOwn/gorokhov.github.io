// Скрипт для слайдшоу
var m = ['images/bg_im1.jpg', 'images/bg_im2.jpg', 'images/bg_im3.jpg', 'images/bg_im4.jpg'];
var i = 0;
function next_img()
{
	i++;
	if (i >= m.length) i = 0;
	document.bg_img_name.src = m[i];
}
setInterval('next_img();', 3000);

// Скрипт для меню
$(document).ready(
	function() {
		$('.header__burger').click(function() {
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		});
		$('.header__menu').click(function() {
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		});
});
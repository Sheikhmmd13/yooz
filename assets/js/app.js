import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const digitalProductLI = document.getElementById('digital-product');
const digitalProductSubmenu = document.getElementById(
	'digital-product-submenu'
);
const digitalPorductIcon = document.getElementById('digital-product-icon');

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

digitalProductLI.addEventListener('click', () => {
	digitalProductSubmenu.classList.toggle('open');
	digitalPorductIcon.classList.toggle('rotate');
});

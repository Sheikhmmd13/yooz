// const Layouts = document.querySelectorAll('.layout');
const CategoryLinks = document.querySelectorAll('.category');
const ShowingFilters = document.querySelectorAll('.showing-filter');
const BrandsFilter = document.querySelectorAll('.brand-name')
const BrandTitle = document.querySelector('.brand-title');
const inputSlider = document.querySelector('input[type=range]');
const sliderValue = document.querySelector('.sliderValue')


const square = document.querySelector('#square');
const line = document.querySelector('#line');
const squareContainer = document.getElementById('square_layout')
const lineContainer = document.getElementById('line_layout')


square.addEventListener('click', () => {
	lineContainer.style.display = 'none';
	squareContainer.style.display = 'block';

	line.classList.remove('selected');
	square.classList.add('selected');
});

line.addEventListener('click', () => {
	lineContainer.style.display = 'block';
	squareContainer.style.display = 'none';

	square.classList.remove('selected');
	line.classList.add('selected');
});

CategoryLinks.forEach((link) => {
	const submenu = link.querySelector('#digital-product-submenu');
	const icon = link.querySelector('#digital-product-icon');

	link.addEventListener('click', () => {
		submenu.classList.toggle('open');
		icon.classList.toggle('rotate');
	});
});

ShowingFilters.forEach((Filter) => {
	const toggle_btn = Filter.querySelector('label');
	var toggleValue = false; //* by default toggle button in false

	toggle_btn.addEventListener('click', () => {
		if (!toggleValue) {
			toggle_btn.style.setProperty('--afterLeft', '1.3em');
			toggle_btn.style.setProperty('--beforeBG', '#edeffe');
			toggle_btn.style.setProperty('--afterBg', '#4b64f2');

			toggleValue = !toggleValue;
			console.log('availble Product: ' + toggleValue);
		} else {
			toggle_btn.style.setProperty('--afterLeft', '.1em');
			toggle_btn.style.setProperty('--beforeBG', '#efefef');
			toggle_btn.style.setProperty('--afterBg', '#929292');

			toggleValue = !toggleValue;
			console.log('availble Product: ' + toggleValue);
		}
	});
});


BrandTitle.addEventListener('click', () => {
	const icon = BrandTitle.querySelector('#icon');
	const BrandsList = document.querySelector('.brands-list');
	BrandsList.classList.toggle('hidden')
	icon.classList.toggle('rotate')
})

BrandsFilter.forEach(BrandName => {
	const selectBrand = BrandName.querySelector('.brand-selected');

	BrandName.addEventListener('click', () => {
		selectBrand.classList.toggle('select');
	})
})

function showMoreBrand() {
	const showMoreButton = document.querySelector('.showMoreButton')
	const showLessButton = document.querySelector('.showLessButton')
	showLessButton.style.display= 'block'
	showMoreButton.style.display = 'none'
	const ul = document.querySelector('.second-brands-group');
	ul.style.display ='flex'
}

function showLessBrand() {
	const showLessButton = document.querySelector('.showLessButton')
	const showMoreButton = document.querySelector('.showMoreButton')
	showMoreButton.style.display= 'block'
	showLessButton.style.display = 'none'
	const ul = document.querySelector('.second-brands-group');
	ul.style.display = 'none'
}

inputSlider.oninput =  (() => {
	let value = inputSlider.value;
	sliderValue.textContent = value + 'هزار';
	sliderValue.style.right = (value) + '%';
	sliderValue.classList.add('show')
});

inputSlider.onblur= () => {
	sliderValue.classList.remove('show')
};
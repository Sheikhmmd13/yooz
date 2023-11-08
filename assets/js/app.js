// const Layouts = document.querySelectorAll('.layout');
const CategoryLinks = document.querySelectorAll('.category');
const ShowingFilters = document.querySelectorAll('.showing-filter');

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

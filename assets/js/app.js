// const Layouts = document.querySelectorAll('.layout');
const CategoryLinks = document.querySelectorAll('.category');
const ShowingFilters = document.querySelectorAll('.showing-filter');
const FilterList = document.querySelectorAll('.filter-lists');
const inputSlider = document.querySelector('input[type=range]');
const sliderValue = document.querySelector('.sliderValue');

const square = document.querySelector('#square');
const line = document.querySelector('#line');
const squareContainer = document.getElementById('square_layout');
const lineContainer = document.getElementById('line_layout');

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
	console.log(toggle_btn)
	var toggleValue = false; //* by default toggle button in false

	toggle_btn.addEventListener('click', (event) => {
		event.preventDefault();
		console.log(toggle_btn.offsetLeft)
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

FilterList.forEach((filterlist) => {
	const FilterTitles = filterlist.querySelectorAll('.title');
	const ItemsList = filterlist.querySelectorAll('.items-list');
	const selectedItems = filterlist.querySelectorAll('.selected-item');

	FilterTitles.forEach((title) => {
		const icons = title.querySelectorAll('#icon');

		icons.forEach((icon) => {
			title.addEventListener('click', () => {
				icon.classList.toggle('rotate');
				ItemsList.forEach((Itemlist) => {
					Itemlist.classList.toggle('hidden');
				});
			});
		});
	});

	selectedItems.forEach((selectedItem) => {
		selectedItem.addEventListener('click', () => {
			const brandColorName = selectedItem.querySelector('.item-selected');
			brandColorName.classList.toggle('select');
		});
	});
});

const showMoreBtns = document.querySelectorAll('.showMoreButton');
const showLessBtns = document.querySelectorAll('.showLessButton');
const secondGroupOfItems = document.querySelectorAll('.second-items-group');

function showMoreOfFirstGroup() {
	showMoreBtns[0].style.display = 'none';
	secondGroupOfItems[0].style.display = 'flex';
}
function showMoreOfSecondGroup() {
	showMoreBtns[1].style.display = 'none';
	secondGroupOfItems[1].style.display = 'flex';
}

function showLessOfFirstGroup() {
	showMoreBtns[0].style.display = 'block';
	secondGroupOfItems[0].style.display = 'none';
}

function showLessOfSecondGroup() {
	showMoreBtns[1].style.display = 'block';
	secondGroupOfItems[1].style.display = 'none';
}

const inputNumberOfPriceFilter = document.querySelectorAll(
	'.price-filter input[type=number]'
);

inputNumberOfPriceFilter.forEach((input) => {
	input.oninput = () => {
		if (input.value <= 0) {
			input.value = 0;
		}
	};
});

inputSlider.oninput = () => {
	let value = inputSlider.value;
	sliderValue.textContent = !(value * 10 === 1000)
		? value * 10 + 'هزار'
		: 1 + 'میلیون';
	switch (value) {
		case 100:
			sliderValue.style.right = value - 15 + '%';
			break;
		case 0:
			sliderValue.style.right = '5%';
			break;
	}
	sliderValue.style.right = value + '%';
	sliderValue.classList.add('show');
};

inputSlider.onblur = () => {
	sliderValue.classList.remove('show');
};

var countDownTime = new Date('Nov 12 2023 14:00:00').getTime();

var x = setInterval(() => {
	var now = new Date().getTime();
	var distance = countDownTime - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
	);
	var minutes = Math.floor((distance % (100 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById('hours').innerHTML = Math.floor(hours % 24) / 10;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

	if (distance <= 0) {
		clearInterval(x);
		document.getElementById('hours').innerHTML = '00';
		document.getElementById('minutes').innerHTML = '00';
		document.getElementById('seconds').innerHTML = '00';
	}
}, 1000);

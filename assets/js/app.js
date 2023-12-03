if (
	document.getElementsByTagName("body")[0].classList.contains("archive-page")
) {
	// const Layouts = document.querySelectorAll('.layout');
	const CategoryLinks = document.querySelectorAll(".category");
	const CategoriesContainer = document.querySelector(".categories");

	const PriceFilter = document.querySelector(".price-filter");

	const PriceFilterRange = document.querySelector(".price-range");

	const ShowingFilters = document.querySelectorAll(".showing-filter");
	const FilterList = document.querySelectorAll(".filter-lists");
	const inputSlider = document.querySelector("input[type=range]");
	const sliderValue = document.querySelector(".sliderValue");

	const appliedFilter = document.querySelector("#applied-filters");

	const appliedFilter__iconDown = appliedFilter.querySelector("#iconDown");
	// filters
	appliedFilter__iconDown.addEventListener("click", () => {
		appliedFilter__iconDown.classList.toggle("rotate");
		appliedFilter.querySelector(".filters").classList.toggle("hidden");
	});

	appliedFilter.querySelectorAll(".selected-filter").forEach((filter) => {
		const icon = filter.querySelector(".remove-filter-icon");

		icon.addEventListener("click", () => {
			filter.classList.add("remove");
			setTimeout(() => {
				filter.remove();
			}, 300);
		});
	});

	CategoriesContainer.querySelector("#iconDown").addEventListener(
		"click",
		() => {
			CategoriesContainer.querySelector("#iconDown").classList.toggle(
				"rotate"
			);
			CategoriesContainer.querySelector(
				".categorie-links"
			).classList.toggle("hidden");
		}
	);

	PriceFilter.querySelector("#iconDown").addEventListener("click", () => {
		PriceFilter.querySelector("#iconDown").classList.toggle("rotate");
		PriceFilter.querySelector(".prices__container").classList.toggle(
			"hidden"
		);
	});

	PriceFilterRange.querySelector("#iconDown").addEventListener(
		"click",
		() => {
			PriceFilterRange.querySelector("#iconDown").classList.toggle(
				"rotate"
			);
			PriceFilterRange.querySelector(
				".price-range-container"
			).classList.toggle("hidden");
		}
	);

	const square = document.querySelector("#square");
	const line = document.querySelector("#line");
	const squareContainer = document.getElementById("square_layout");
	const lineContainer = document.getElementById("line_layout");

	square.addEventListener("click", () => {
		lineContainer.style.display = "none";
		squareContainer.style.display = "block";

		line.classList.remove("selected");
		square.classList.add("selected");
	});

	line.addEventListener("click", () => {
		lineContainer.style.display = "block";
		squareContainer.style.display = "none";

		square.classList.remove("selected");
		line.classList.add("selected");
	});

	CategoryLinks.forEach((link) => {
		const submenu = link.querySelector("#digital-product-submenu");
		const icon = link
			.querySelector("#digital-product-icon")
			.querySelector(".yoz-arrow-up-2");

		link.addEventListener("click", () => {
			submenu.classList.toggle("open");
			icon.classList.toggle("rotate");
		});
	});

	ShowingFilters.forEach((Filter) => {
		const toggle_btn = Filter.querySelector("label");
		console.log(toggle_btn);
		var toggleValue = false; //* by default toggle button in false

		toggle_btn.addEventListener("click", (event) => {
			event.preventDefault();
			console.log(toggle_btn.offsetLeft);
			if (!toggleValue) {
				toggle_btn.style.setProperty("--afterLeft", "1.3em");
				toggle_btn.style.setProperty("--beforeBG", "#edeffe");
				toggle_btn.style.setProperty("--afterBg", "#4b64f2");

				toggleValue = !toggleValue;
				console.log("availble Product: " + toggleValue);
			} else {
				toggle_btn.style.setProperty("--afterLeft", ".1em");
				toggle_btn.style.setProperty("--beforeBG", "#efefef");
				toggle_btn.style.setProperty("--afterBg", "#929292");

				toggleValue = !toggleValue;
				console.log("availble Product: " + toggleValue);
			}
		});
	});

	FilterList.forEach((filterlist) => {
		const FilterTitles = filterlist.querySelectorAll(".title");
		const ItemsList = filterlist.querySelectorAll(".items-list");
		const selectedItems = filterlist.querySelectorAll(".selected-item");

		FilterTitles.forEach((title) => {
			const icons = title.querySelectorAll("#icon");

			icons.forEach((icon) => {
				title.addEventListener("click", () => {
					icon.classList.toggle("rotate");
					ItemsList.forEach((Itemlist) => {
						Itemlist.classList.toggle("hidden");
					});
				});
			});
		});

		selectedItems.forEach((selectedItem) => {
			selectedItem.addEventListener("click", () => {
				const brandColorName =
					selectedItem.querySelector(".item-selected");
				brandColorName.classList.toggle("select");
			});
		});
	});

	const showMoreBtns = document.querySelectorAll(".showMoreButton");
	const showLessBtns = document.querySelectorAll(".showLessButton");
	const secondGroupOfItems = document.querySelectorAll(".second-items-group");

	function showMoreOfFirstGroup() {
		showMoreBtns[0].style.display = "none";
		secondGroupOfItems[0].style.display = "flex";
	}
	function showMoreOfSecondGroup() {
		showMoreBtns[1].style.display = "none";
		secondGroupOfItems[1].style.display = "flex";
	}

	function showLessOfFirstGroup() {
		showMoreBtns[0].style.display = "block";
		secondGroupOfItems[0].style.display = "none";
	}

	function showLessOfSecondGroup() {
		showMoreBtns[1].style.display = "block";
		secondGroupOfItems[1].style.display = "none";
	}

	const inputNumberOfPriceFilter = document.querySelectorAll(
		".price-filter input[type=number]"
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

		inputSlider.style.setProperty("--width-range", value + "%");

		sliderValue.textContent = !(value * 10 === 1000)
			? value * 10 + "هزار"
			: 1 + "میلیون";
		switch (value) {
			case 100:
				sliderValue.style.right = value - 15 + "%";
				break;
			case 0:
				sliderValue.style.right = "5%";
				break;
		}
		sliderValue.style.right = value + "%";
		sliderValue.classList.add("show");
	};

	inputSlider.onblur = () => {
		sliderValue.classList.remove("show");
	};

	var countDownTime = new Date("Nov 12 2023 14:00:00").getTime();

	var x = setInterval(() => {
		var now = new Date().getTime();
		var distance = countDownTime - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
		);
		var minutes = Math.floor((distance % (100 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("hours").innerHTML =
			Math.floor(hours % 24) / 10;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;

		if (distance <= 0) {
			clearInterval(x);
			document.getElementById("hours").innerHTML = "00";
			document.getElementById("minutes").innerHTML = "00";
			document.getElementById("seconds").innerHTML = "00";
		}
	}, 1000);

	var swiper = new Swiper(".cat-slider", {
		loop: true,
		slidesPerView: 6,
		spaceBetween: 5,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
if (
	document
		.getElementsByTagName("body")[0]
		.classList.contains("discriptionMobile")
) {
	const WeekPointContainer = document.querySelector(".week-points .points");
	const StrengthPointContainer = document.querySelector(
		".strength-points .points"
	);
	const WeekPoint = document.querySelector("#week-points");
	const StrengthPoint = document.querySelector("#strength-point");
	const addPoint = document.querySelector(".add-user-point");
	const closeAddPoint = document.querySelector("#exit");
	const submitAddPoint = document.querySelector("#submit");
	const inputsRange = document.querySelectorAll("input[type=range]");
	const product__review_section = document.querySelector(".product-review");
	const showMore_Btn = document.querySelector("#show__more_p");
	const hidden_p = document.querySelectorAll(".hidden__p");

	function deleteUserPoint() {
		const UserPoints = document.querySelectorAll(".user-point");

		UserPoints.forEach((userPoint) => {
			userPoint.querySelector("span").addEventListener("click", () => {
				userPoint.classList.add("hidden");
				setTimeout(() => {
					userPoint.remove();
				}, 300);
			});
		});
	}

	deleteUserPoint();

	WeekPoint.addEventListener("click", () => {
		addPoint.classList.add("open-left");
	});

	StrengthPoint.addEventListener("click", () => {
		addPoint.classList.add("open-right");
	});

	closeAddPoint.addEventListener("click", (event) => {
		event.preventDefault();
		addPoint.classList.remove("open-left");
		addPoint.classList.remove("open-right");
	});

	submitAddPoint.addEventListener("click", (event) => {
		event.preventDefault();

		const isModalOpenInLeftSide = addPoint.classList.contains("open-left");
		const isModalOpenInrRghtSide =
			addPoint.classList.contains("open-right");
		const userComment = document.querySelector("#add-user-comment");

		if (userComment.value.trim() === "") {
			addPoint.classList.remove("open-left");
			addPoint.classList.remove("open-right");
			return;
		}

		const htmlTemplate = `
    <div class="user-point d-flex align-items-center justify-content-center gap-1 py-2 px-4 rounded-5">
        <span class="yoz-add d-flex justify-content-center align-items-center" style="transform: rotate(45deg);"></span>
        <p>${userComment.value}</p>
    </div>
    `;

		if (isModalOpenInLeftSide) {
			addPoint.classList.remove("open-left");
			WeekPointContainer.innerHTML += htmlTemplate;
			deleteUserPoint();
			userComment.value = "";
		}

		if (isModalOpenInrRghtSide) {
			addPoint.classList.remove("open-right");
			StrengthPointContainer.innerHTML += htmlTemplate;
			deleteUserPoint();
			userComment.value = "";
		}
	});

	inputsRange.forEach((input) => {
		input.oninput = () => {
			input.style.setProperty(
				"--rangeInputBeforWidth",
				input.value + "%"
			);
		};

		input.addEventListener("mouseover", (event) => {
			console.log("add");
		});

		input.addEventListener("mouseout", () => {
			console.log("remove");
		});
	});

	// toggle hidden p
	hidden_p.forEach((p) => {
		var isOpen = false;

		showMore_Btn.addEventListener("click", () => {
			isOpen = !isOpen;

			if (isOpen) {
				p.classList.remove("hidden__p");
				product__review_section.style.setProperty("--show", "none");
				showMore_Btn.querySelector("span").classList.add("rotate"); //icon inside of button
			} else {
				p.classList.add("hidden__p");
				product__review_section.style.setProperty("--show", "block");
				showMore_Btn.querySelector("span").classList.remove("rotate"); //icon inside of button
			}
		});
	});
}

if (
	document.getElementsByTagName("body")[0].classList.contains("pannel-items")
) {
	const SelectingDropDown = document.querySelectorAll(".selecting__dropdown");

	SelectingDropDown.forEach((formGroup) => {
		const selectedCity = formGroup.querySelector("#city-name");
		const options = formGroup.querySelector(".options");
		const option = options.querySelectorAll(".option");

		selectedCity.addEventListener("click", () => {
			options.classList.toggle("hidden");
		});

		option.forEach((li) => {
			li.addEventListener("click", () => {
				const optionText = li.querySelector(".option-text");
				selectedCity.innerHTML = optionText.innerHTML;
				options.classList.add("hidden");
			});
		});
	});

	// accordion button and apply styles
	const accordions = document.querySelectorAll(".accordion");
	accordions.forEach((accordion) => {
		const accordion_btn = accordion.querySelector(".accordion-btn");
		const accordion_body = accordion.querySelector(".accordion-collapse");
		accordion_body.classList.remove("show");

		accordion_btn.addEventListener("click", () => {
			accordion.querySelector(".order").classList.toggle("open");
		});
	});
}

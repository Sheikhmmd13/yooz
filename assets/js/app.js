//* Cursor Code
const cursor = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
	const posX = e.clientX;
	const posY = e.clientY;

	//* cursor dot
	cursor.style.left = `${posX}px`;
	cursor.style.top = `${posY}px`;

	//* cursor outline
	cursorOutline.animate(
		{
			left: `${posX}px`,
			top: `${posY}px`,
		},
		{ duration: 500, fill: "forwards" }
	);
});

if (
	document.getElementsByTagName("body")[0].classList.contains("archive-page")
) {
	const Layouts = document.querySelectorAll(".layout");

	//* Price Range
	const inputSlider = document.querySelector("input[type=range]");
	const sliderValue = document.querySelector(".sliderValue");

	//* Toggle Filter
	const ShowingFilters = document.querySelectorAll(".showing-filter");
	const FilterList = document.querySelectorAll(".filter-lists");

	//* remove applied filter
	document.querySelectorAll("[data-applied-filter]").forEach((filter) => {
		filter
			.querySelector("[data-applied-filter-close]")
			.addEventListener("click", () => {
				filter.classList.add("remove");
				setTimeout(() => {
					filter.remove();
				}, 300);
			});
	});

	//* Rotate Icon Of sideBar Cart
	const SiderBarTiltles = document.querySelectorAll("[data-title]");
	SiderBarTiltles.forEach((title) => {
		const icon = title.querySelector("[data-icon]");

		title.addEventListener("click", () => {
			icon.classList.toggle("rotate");
		});
	});

	//* Tick for select Filter
	const SelectFilter = document.querySelectorAll("[data-SelectFilter]");

	SelectFilter.forEach((filter) => {
		const tick = filter.querySelector("[data-SelectFilter-tick]");

		filter.addEventListener("click", () => {
			tick.classList.toggle("select");
		});
	});

	//* Change layout of Products
	// const squareContainer = document.querySelector("[data-square]");
	// const squareIcon = document.querySelector("[data-square-icon]");
	// const lineContainer = document.querySelector("[data-line]");
	// const lineIcon = document.querySelector("[data-line-icon]");

	// squareIcon.addEventListener("click", () => {
	// 	lineContainer.removeAttribute("data-selected");
	// 	squareContainer.setAttribute("data-selected", "");
	// });

	// lineIcon.addEventListener("click", () => {
	// 	console.log("click");
	// 	squareContainer.removeAttribute("data-selected");
	// 	lineContainer.setAttribute("data-selected", "");
	// });

	const square = document.querySelector("[data-square-icon]");
	const line = document.querySelector("[data-line-icon]");
	const squareContainer = document.querySelector("[data-square]");
	const lineContainer = document.querySelector("[data-line]");

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

	//* Show more filter
	const more_less__btns = document.querySelectorAll("[data-more-less-btn]");
	more_less__btns.forEach((btn) => {
		var isOpen = true;

		btn.addEventListener("click", () => {
			isOpen = !isOpen;
			const showMore_btn =
				'<span class="yoz-add"></span><p class="m-0">نمایش بیشتر</p>';
			const showLess_btn =
				'<span class="yoz-minus"></span><p class="m-0">نمایش کمتر</p>';

			//* by default;
			btn.innerHTML = !isOpen ? showLess_btn : showMore_btn;
		});
	});

	//* Toggle Filter
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
		let value = +inputSlider.value;

		inputSlider.style.setProperty("--width-range", value + "%");

		sliderValue.textContent = !(value * 10 === 1000)
			? value * 10 + "هزار"
			: 1 + "میلیون";

		sliderValue.style.right = value + "%";
		if (value === 100) {
			sliderValue.style.right = "98%";
		}
		if (value === 0) {
			sliderValue.style.right = "2%";
		}

		sliderValue.classList.add("show");
	};

	inputSlider.onblur = () => {
		sliderValue.classList.remove("show");
		console.log("blur");
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

	// inputs
	// const input = document.querySelectorAll('.input')
	const FormGroup = document.querySelectorAll(".form-group");

	FormGroup.forEach((group) => {
		console.log(group);
		const input = group.querySelector(".input");

		input.addEventListener("focus", () => {
			group.classList.add("blue-border");
		});

		input.addEventListener("blur", () => {
			group.classList.remove("blue-border");
		});
	});

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
				input.value * 20 + "%"
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

	let isOpen = false;
	showMore_Btn.addEventListener("click", () => {
		console.log(isOpen);

		isOpen = !isOpen;

		if (isOpen) {
			product__review_section.style.setProperty("--show", "none");
			document
				.querySelector("[data-showMore-icon]")
				.classList.add("rotate"); //icon inside of button
		} else {
			product__review_section.style.setProperty("--show", "block");
			document
				.querySelector("[data-showMore-icon]")
				.classList.remove("rotate"); //icon inside of button
		}
		console.log(isOpen);
	});
}

if (
	document.getElementsByTagName("body")[0].classList.contains("pannel-items")
) {
	const SelectingDropDown = document.querySelectorAll(".selecting__dropdown");

	SelectingDropDown.forEach((formGroup, index) => {
		const selectedCity = formGroup.querySelector("[city-name]");
		const options = formGroup.querySelector(".options");
		const option = options.querySelectorAll(".option");

		option.forEach((li) => {
			document
				.querySelectorAll("[data-collapse-cotainer]")
				.forEach((container) => {
					li.addEventListener("click", () => {
						const optionText =
							li.querySelector(".option-text").innerHTML;
						selectedCity.innerHTML = optionText;
						container.classList.remove('show')
					});
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
			accordion.querySelector(".acc-order").classList.toggle("open");
		});
	});
}

if (document.getElementsByTagName("body")[0].classList.contains("main-page1")) {
	const Stories = document.querySelectorAll(".category");
	const modal = document.querySelector(".modal");
	const ModalContent = modal.querySelector(".content");
	const close_icon = modal.querySelector(".close-icon");
	const searchFild = document.querySelector(".search");
	const searchFildInput = searchFild.querySelector("#searchBar");
	console.log(searchFild);

	Stories.forEach((story) => {
		story.addEventListener("click", () => {
			const storyImg = story.querySelector(".category-img");

			storyImg.style.outlineStyle = "dotted";
			storyImg.style.outlineColor = "red";

			setTimeout(() => {
				modal.style.display = "flex";
				setTimeout(() => {
					ModalContent.style.transform = "translateY(-50%) scale(1)";
				}, 10);

				storyImg.style.outlineStyle = "solid";
				storyImg.style.outlineColor = "#a9a9a9";
			}, 350);
		});
	});

	close_icon.addEventListener("click", () => {
		ModalContent.style.transform = "translateY(-50%) scale(0)";

		setTimeout(() => {
			modal.style.display = "none";
		}, 300);

		const storyImg = story.querySelector(".category-img");
	});

	// search bar animation
	searchFildInput.addEventListener("focus", () => {
		searchFild.style.borderColor = "#4d67f5";
	});

	searchFildInput.addEventListener("blur", () => {
		searchFild.style.borderColor = "#eee";
	});
}

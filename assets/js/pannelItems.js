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

	// accordion_btn.
});

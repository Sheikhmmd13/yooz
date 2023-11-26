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
const product__review_section = document.querySelector('.product-review')
const showMore_Btn = document.querySelector('#show__more_p');
const hidden_p = document.querySelectorAll('.hidden__p');

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
	const isModalOpenInrRghtSide = addPoint.classList.contains("open-right");
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
		input.style.setProperty("--rangeInputBeforWidth", input.value + "%");
	};

	input.addEventListener("mouseover", (event) => {
		console.log("add");
	});

	input.addEventListener("mouseout", () => {
		console.log("remove");
	});
});


// toggle hidden p
hidden_p.forEach(p => {
	var isOpen = false;

	showMore_Btn.addEventListener('click', ()=> {
		isOpen = !isOpen;

		if(isOpen){
			p.classList.remove('hidden__p');
			product__review_section.style.setProperty('--show', 'none')
			showMore_Btn.querySelector('span').classList.add('rotate') //icon inside of button
		} else {
			p.classList.add('hidden__p');
			product__review_section.style.setProperty('--show', 'block')
			showMore_Btn.querySelector('span').classList.remove('rotate') //icon inside of button
		}


	})
})
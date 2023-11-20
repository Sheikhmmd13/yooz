const SelectingDropDown = document.querySelectorAll('.selecting__dropdown');

SelectingDropDown.forEach(formGroup => {
    const selectedCity = formGroup.querySelector('#city-name')
    const options =  formGroup.querySelector('.options');
    const option = options.querySelectorAll('.option')

    selectedCity.addEventListener('click', () => {
        options.classList.toggle('hidden');
    })

    option.forEach(li => {
        li.addEventListener('click', () => {
            const optionText = li.querySelector('.option-text');
            selectedCity.innerHTML = optionText.innerHTML;
            options.classList.add('hidden')
        })
    })
})
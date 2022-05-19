// We select all the numbers
const number = document.querySelector('.rating-score');
// Grabbing the first form where the user will select the rating
const request = document.querySelector('#request');
// After clicking submit, it will take the value clicked in the rating 1 to 5.
const submitBtn = document.querySelector('.rating-button');

// Error message handling
const errorMessage = document.querySelector('.error');

// Grabbing the thank you form
const thanks = document.querySelector('#thanks');
// This will display the result 4 out of 5 || 5 out of 5
const result = document.querySelector('.thank-you-special-text');

// This function once is called, will change the color for the item selected:
function colorChange(value) {
	value.classList.add('ratingOptSelected');
}

let numArray = [];
let storage = [];

number.addEventListener('click', (e) => {
	// We get to know the item that was clicked
	const target = e.target;
	const ratingNum = target.dataset.id;

	numArray.push(ratingNum);
	storage.push(target);
	colorChange(target);

	if (numArray.length > 1 && ratingNum !== numArray[numArray.length - 2]) {
		storage[storage.length - 2].classList.remove(ratingOptSelected);
	}
});

submitBtn.addEventListener('click', (e) => {
	if (numArray.length === 0) return;
	console.log(numArray, numArray.length);
	// if (numArray.length !== 0) errorMessage.classList.remove('hidden');

	request.classList.add('hidden');
	thanks.classList.remove('hidden');

	result.innerHTML = `
        <div class="result">
          You selected ${numArray[numArray.length - 1]} out of 5
        </div>`;
});

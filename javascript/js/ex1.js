let digits = [];

let outerOutput = document.querySelector('.outer-output');

let innerOutput = document.querySelector('.inner-output');

let numerics = Array.from(document.querySelectorAll('.numeric'));

let operators = Array.from(document.querySelectorAll('.operator'));

let clear = document.querySelector('.cls');

let equal = document.querySelector('.equal');

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

numerics.forEach((item) => {
	item.addEventListener('click', (event) => {
		if(!isNumeric(outerOutput.innerText)){
		 	outerOutput.innerText = "";
		}
		btn = event.srcElement; 
		outerOutput.innerText += btn.innerText;
		digits.push(btn.innerText);	
	})
})

operators.forEach((item) => {
	item.addEventListener('click', (event) => {
		btn = event.srcElement;
		

		if(outerOutput.innerText === "")
			return;

		if(!isNumeric(outerOutput.innerText))
			outerOutput.innerText = "";

		innerOutput.innerText += outerOutput.innerText + btn.innerText;
		outerOutput.innerText = "";
		digits.push(btn.innerText);
	})
})

clear.addEventListener('click', (event) => {
	innerOutput.innerText = "";
	outerOutput.innerText = "";
	digits = [];
})

equal.addEventListener('click', (event) => {
	if(outerOutput.innerText === "")
			return;
	let result = '';
	let signals = new Array;
	let numbers = new Array;
	let j = 0;
	console.log(digits);
	for(let i = 0; i < digits.length; i++) {
		if(isNumeric(digits[i])) {
			if(!numbers[j])
				numbers[j] = digits[i];
			else
				numbers[j] += digits[i];
		} else {
			j++;
			signals.push(digits[i]);
		}
	}
	result += parseInt(numbers[0]);
	for(let i = 0; i < signals.length; i++) {
		if(signals[i] === '+')
			result = parseInt(result) + parseInt(numbers[i+1]);
		else if(signals[i] === '-')
			result = parseInt(result) - parseInt(numbers[i+1]);
		else if(signals[i] === '*')
			result = parseInt(result) * parseInt(numbers[i+1]);
		else
			if(result <= 0)
				result = 0;
			else
				result = parseInt(result) / parseInt(numbers[i+1]);
	}
	outerOutput.innerText = result;
	innerOutput.innerText = '';
	digits = [];
	digits.push(result);
})

//Capitalize
export function capitalize(sentence) {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

//Reverse string
export function reverseString(string) {
	return string.split('').reverse().join('');
}

//Calculator
export const calculator = {
	add: (a, b) => {
		return a + b;
	},

	subtract: (a, b) => {
		return a - b;
	},

	multiply: (a, b) => {
		return a * b;
	},

	divide: (a, b) => {
		return a / b;
	},
};

//Caesar Shift Cipher
export function caesarCipher(string, shiftFactor) {
	const alphabet = generateAlphabet();

	const arrayOfLetters = string.split('');
	const shiftedAlphabet = shiftArray(alphabet, shiftFactor);
	const indexArray = [];

	arrayOfLetters.forEach((letter) => {
		if (letter === ',') {
			indexArray.push(',');
		} else if (isPartOfAlphabet(letter.toUpperCase(), alphabet)) {
			indexArray.push(alphabet.indexOf(letter.toUpperCase()));
		} else {
			indexArray.push(letter);
		}
	});

	const resultArray = [];
	indexArray.forEach((index) => {
		if (typeof index === 'number') {
			resultArray.push(shiftedAlphabet[index]);
		} else {
			resultArray.push(index);
		}
	});

	const shiftedString = resultArray.join('');
	return shiftedString;
}

function shiftArray(array, shiftFactor) {
	const shiftedArray = [];
	const effectiveShiftFactor = shiftFactor % array.length;
	const secondPart = array.slice(0, effectiveShiftFactor);
	const firstPart = array.slice(effectiveShiftFactor);
	firstPart.push(...secondPart);
	shiftedArray.push(...firstPart);
	return shiftedArray;
}

function generateAlphabet() {
	const alphabet = [];
	for (let i = 65; i <= 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	return alphabet;
}

function isPartOfAlphabet(input, alphabet) {
	const regex = new RegExp(`^[${alphabet}]+$`);
	return regex.test(input);
}

//Analyze array
export function analyzeArray(array) {
	const average = (array) => {
		return (
			array.reduce((prev, current) => current + prev, 0) / array.length
		);
	};

	const resultObject = {
		average: average(array),
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length,
	};

	return resultObject;
}

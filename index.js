export function capitalize(sentence) {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export function reverseString(string) {
	return string.split('').reverse().join('');
}

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

export function caesarCipher(string, shiftFactor) {
	const alphabet = generateAlphabet();
	const arrayOfLetters = string.split('');
	const shiftedAlphabet = shiftArray(alphabet, shiftFactor);
	const indexArray = [];
	arrayOfLetters.forEach((letter) => {
		if (letter === ' ') {
			indexArray.push(letter);
		} else {
			indexArray.push(alphabet.indexOf(letter.toUpperCase()));
		}
	});
	const resultArray = [];
	indexArray.forEach((index) => {
		if (index !== ' ') {
			resultArray.push(shiftedAlphabet[index]);
		} else {
			resultArray.push(' ');
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
	for (let i = 65; i < 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	return alphabet;
}

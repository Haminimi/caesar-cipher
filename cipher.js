function caesarCipher(string, shiftFactor) {
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

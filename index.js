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

function generateAlphabet() {
	const alphabet = [];
	for (let i = 65; i < 90; i++) {
		alphabet.push(String.fromCharCode(i));
	}
	return alphabet;
}

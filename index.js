export function capitalize(sentence) {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export function reverseString(string) {
	return string.split('').reverse().join('');
}

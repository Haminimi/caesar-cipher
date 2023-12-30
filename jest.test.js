import { capitalize, reverseString, calculator } from '.';

test('Capitalize', () => {
	expect(capitalize('jest test for the capitalize function.')).toBe(
		'Jest test for the capitalize function.'
	);
});

test('Reverse string', () => {
	expect(reverseString('Jest test for the capitalize function.')).toBe(
		'.noitcnuf ezilatipac eht rof tset tseJ'
	);
});

test('Calculator', () => {
	expect(calculator.add(1, 2)).toBe(3);
	expect(calculator.subtract(1, 2)).toBe(-1);
	expect(calculator.multiply(1, 2)).toBe(2);
	expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test('Caesar Shift Cipher', () => {
	expect(caesarCipher('julius caesar', 3)).toBe('MXOLXV FDHVDU');
});

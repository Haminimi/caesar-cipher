import { capitalize, reverseString, calculator, caesarCipher } from '.';

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
	expect(caesarCipher('julius, caesar', 3)).toBe('MXOLXV, FDHVDU');
	expect(caesarCipher('marcus brutus', 3)).toBe('PDUFXV EUXWXV');
	expect(caesarCipher('marcus crassus', 5)).toBe('RFWHZX HWFXXZX');
	expect(caesarCipher('RFWHZX HWFXXZX', 21)).toBe('MARCUS CRASSUS');
	expect(caesarCipher('Beware the Ides of March.', 7)).toBe(
		'ILDHYL AOL PKLZ VM THYJO.'
	);
	expect(caesarCipher('Jest testing.', 15)).toBe('YTHI ITHIXCV.');
	expect(caesarCipher('YTHI ITHIXCV.', 11)).toBe('JEST TESTING.');
});

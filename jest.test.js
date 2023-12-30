import { capitalize } from '.';

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

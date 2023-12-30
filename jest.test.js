import { capitalize } from '.';

test('Capitalize', () => {
	expect(capitalize('jest test for the capitalize function.')).toBe(
		'Jest test for the capitalize function.'
	);
});

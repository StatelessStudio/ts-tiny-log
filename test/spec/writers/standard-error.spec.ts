/* eslint-disable no-console */

import { standardError } from '../../../src/writers';

describe('writers/standardError', () => {
	let consoleError;

	beforeEach(() => {
		consoleError = console.error;
	});

	afterEach(() => {
		console.error = consoleError;
	});

	it('calls console.error', () => {
		let a, b;

		console.error = (...data) => {
			a = data[0];
			b = data[1];
		};

		expect(standardError('a', 'b')).toBeUndefined();
		expect(a).toBe('a');
		expect(b).toBe('b');
	});
});

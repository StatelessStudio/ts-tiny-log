/* eslint-disable no-console */

import { standardOut } from '../../../src/writers';

describe('writers/standardOut', () => {
	let consoleOut;

	beforeEach(() => {
		consoleOut = console.log;
	});

	afterEach(() => {
		console.log = consoleOut;
	});

	it('calls console.log', () => {
		let a, b;

		console.log = (...data) => {
			a = data[0];
			b = data[1];
		};

		expect(standardOut('a', 'b')).toBeUndefined();
		expect(a).toBe('a');
		expect(b).toBe('b');
	});
});

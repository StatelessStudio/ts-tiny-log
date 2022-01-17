import 'jasmine';

import * as index from '../../src';

describe('index', () => {
	it('exports Log', () => {
		expect(index.Log).toBeDefined();
	});

	it('exports LogContract', () => {
		const something: Partial<index.LogContract> = {};

		expect(something).toBeDefined();
	});

	it('exports a log function', () => {
		expect(index.log()).toBeDefined();
	});

	it('exports a setLog function', () => {
		const log = new index.Log();
		expect(index.setLog(log)).toBe(log);
	});
});

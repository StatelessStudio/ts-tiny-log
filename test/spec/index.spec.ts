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
});

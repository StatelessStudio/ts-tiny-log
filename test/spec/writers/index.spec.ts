import * as writers from '../../../src/writers';

describe('writers/index', () => {
	it('exports LogWriter', () => {
		const something: writers.LogWriter = () => {};
		expect(something).toBeDefined();
	});

	it('exports standardError', () => {
		expect(writers.standardError).toBeDefined();
	});

	it('exports standardOut', () => {
		expect(writers.standardOut).toBeDefined();
	});
});

import * as levels from '../../../src/levels';

describe('levels/index', () => {
	it('exports LogLevelMethod', () => {
		const something: levels.LogLevelMethod = () => {};
		expect(something).toBeDefined();
	});

	it('exports LogLevel', () => {
		expect(levels.LogLevel).toBeDefined();
	});

	it('exports nLogLevels', () => {
		expect(levels.nLogLevels).toBeDefined();
	});
});

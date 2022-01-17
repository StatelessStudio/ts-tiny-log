import { LogLevelMethod } from '../../../src/levels';

describe('levels/LogLevelMethod', () => {
	it('accepts multiple parameters', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const something: LogLevelMethod = (a, b) => {};

		expect(something).toBeDefined();
	});

	it('returns void', () => {
		const something: LogLevelMethod = () => {
			return;
		};

		expect(something).toBeDefined();
	});
});

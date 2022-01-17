import { LogWriter } from '../../../src/writers';

describe('writers/LogWriter', () => {
	it('accepts multiple parameters', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const something: LogWriter = (...a) => {};

		expect(something).toBeDefined();
	});

	it('returns void', () => {
		const something: LogWriter = () => {
			return;
		};

		expect(something).toBeDefined();
	});
});

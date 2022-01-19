import { LogLevel, nLogLevels } from '../../../src/levels';

describe('levels/LogLevel', () => {
	it('has level "none"', () => {
		expect(LogLevel.none).toBe(0);
	});

	it('has level "fatal"', () => {
		expect(LogLevel.fatal).toBe(1);
	});

	it('has level "error"', () => {
		expect(LogLevel.error).toBe(2);
	});

	it('has level "warn"', () => {
		expect(LogLevel.warn).toBe(3);
	});

	it('has level "info"', () => {
		expect(LogLevel.info).toBe(4);
	});

	it('has level "debug"', () => {
		expect(LogLevel.debug).toBe(5);
	});
});

describe('levels/nLogLevels', () => {
	it('equals the number of levels', () => {
		expect(nLogLevels).toBe(6);
	});
});

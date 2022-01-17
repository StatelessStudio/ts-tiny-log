import { LogEntryInterface } from '../../../src/entries';
import { LogLevel } from '../../../src/levels';

describe('entries/LogEntryInterface', () => {
	it('has a level property', () => {
		const entry: Partial<LogEntryInterface> = {
			level: LogLevel.info
		};

		expect(entry.level).toEqual(LogLevel.info);
	});

	it('has a data property', () => {
		const entry: Partial<LogEntryInterface> = {
			data: 'test'
		};

		expect(entry.data).toEqual('test');
	});
});

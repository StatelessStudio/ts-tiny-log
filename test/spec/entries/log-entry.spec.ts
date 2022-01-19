import { LogEntry, LogEntryInterface } from '../../../src/entries';
import { LogLevel } from '../../../src/levels';

import { timestampRegex } from '../../utils/regex/timestamp';

describe('entries/LogEntry', () => {
	const defaults: LogEntryInterface = {
		level: LogLevel.info,
		data: [ 'test' ]
	};

	it('takes a LogEntryInterface', () => {
		const entry = new LogEntry(defaults);

		expect(entry.level).toEqual(LogLevel.info);
		expect(entry.data).toEqual(['test']);
	});

	it('marks the timestamp of instantiation', () => {
		const entry = new LogEntry(defaults);

		expect(entry.timestamp).toBeCloseTo(Date.now());
	});

	it('can get the timestamp in ISO-8601 UTC', () => {
		const entry = new LogEntry(defaults);

		expect(timestampRegex.test(entry.getTimestamp())).toBeTrue();
	});
});

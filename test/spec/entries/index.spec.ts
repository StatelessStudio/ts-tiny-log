import * as entries from '../../../src/entries';

describe('entries/index', () => {
	it('exports LogEntryInterface', () => {
		let entry: entries.LogEntryInterface;
		expect(entry).toBeUndefined();
	});

	it('exports LogEntry', () => {
		expect(entries.LogEntry).toBeDefined();
	});
});

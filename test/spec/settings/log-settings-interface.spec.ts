import { LogLevel } from '../../../src/levels';
import { LogSettingsInterface } from '../../../src/settings';

describe('settings/LogSettingsInterface', () => {
	const settings: LogSettingsInterface = {
		level: LogLevel.info,
		shouldWriteTimestamp: true,
		shouldWriteLogLevel: true,
		metadataFormat: (str) => str,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		standardError: (...a) => {},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		standardOut: (...a) => {}
	};

	it('has level typed as LogLevel', () => {
		expect(settings.level).toBeDefined();
	});

	it('has shouldWriteTimestamp as boolean', () => {
		expect(settings.shouldWriteTimestamp).toBe(true);
	});

	it('has shouldWriteLogLevel as boolean', () => {
		expect(settings.shouldWriteLogLevel).toBe(true);
	});

	it('has metadata as str => str', () => {
		expect(settings.metadataFormat('a')).toBe('a');
	});

	it('has standardError as ...a => void', () => {
		expect(settings.standardError('a', 'b')).toBeUndefined();
	});

	it('has standardOut as ...a => void', () => {
		expect(settings.standardOut('a', 'b')).toBeUndefined();
	});
});

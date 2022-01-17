import { LogLevel } from '../../../src/levels';
import { defaultLogSettings } from '../../../src/settings';
import { standardError, standardOut } from '../../../src/writers';

describe('settings/defaultLogSettings', () => {
	it('defaults to level "info"', () => {
		expect(defaultLogSettings.level).toBe(LogLevel.info);
	});

	it('defaults to shouldWriteTimestamp to "true"', () => {
		expect(defaultLogSettings.shouldWriteTimestamp).toBe(true);
	});

	it('defaults to shouldWriteLogLevel to "true"', () => {
		expect(defaultLogSettings.shouldWriteLogLevel).toBe(true);
	});

	it('defaults to metadataFormat to columns', () => {
		expect(defaultLogSettings.metadataFormat('hello'))
			.toBe('hello |');
	});

	it('defaults to standError', () => {
		expect(defaultLogSettings.standardError).toBe(standardError);
	});

	it('defaults to standardOut', () => {
		expect(defaultLogSettings.standardOut).toBe(standardOut);
	});
});

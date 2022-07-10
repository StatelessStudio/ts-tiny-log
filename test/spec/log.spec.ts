import { LogLevel } from '../../src/levels';
import { Log } from '../../src/log';
import { captureLog } from '../utils/log/capture-log';
import { testLogLevelMethod } from '../utils/log/test-log-level-method';
import { timestampRegex } from '../utils/regex/timestamp';

describe('Log', () => {
	it('is constructable', () => {
		const log: Log = new Log();

		expect(log).toBeDefined();
	});

	it('can accept settings', () => {
		const log: Log = new Log({
			shouldWriteLogLevel: true,
		});

		expect(log).toBeDefined();
	});

	it('can change writers after instantiation', () => {
		const log: Log = new Log({
			shouldWriteLogLevel: false,
			shouldWriteTimestamp: false,
		});
		let logged;

		log.setWriter(LogLevel.fatal, (str) => logged = str);

		log.fatal('test');

		expect(logged).toBe('test');
	});

	it('can change level after instantation', () => {
		const log: Log = new Log();
		let hasLogged = false;

		log.setLevel(LogLevel.none);
		log.setWriter(LogLevel.fatal, () => hasLogged = true);

		log.fatal('muted');

		expect(hasLogged).toBeFalse();
	});

	it('can log to fatal', () => {
		testLogLevelMethod(LogLevel.fatal);
	});

	it('can log to error', () => {
		testLogLevelMethod(LogLevel.error);
	});

	it('can log to warn', () => {
		testLogLevelMethod(LogLevel.warn);
	});

	it('can log to info', () => {
		testLogLevelMethod(LogLevel.info);
	});

	it('can log to debug', () => {
		testLogLevelMethod(LogLevel.debug);
	});

	it('can have a custom metadata format', () => {
		const captured = captureLog('test', undefined, {
			shouldWriteLogLevel: true,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			metadataFormat: str => 'custom-metadata-format',
		});

		expect(captured).toContain('custom-metadata-format');
	});

	it('can prepend the log level', () => {
		const captured = captureLog('test', LogLevel.fatal, {
			shouldWriteLogLevel: true,
			shouldWriteTimestamp: false,
			metadataFormat: str => `${str} |`,
		});

		const columns = captured.split(' |');

		expect(columns[0]).toBe('fatal');
		expect(columns[1]).toBe('test');
	});

	it('can prepend the timestamp', () => {
		const captured = captureLog('test', LogLevel.fatal, {
			shouldWriteLogLevel: false,
			shouldWriteTimestamp: true,
			metadataFormat: str => `${str} |`,
		});

		const columns = captured.split(' |');

		expect(timestampRegex.test(columns[0])).toBeTrue();
		expect(columns[1]).toBe('test');
	});

	it('can prepend the timestamp and the level', () => {
		const captured = captureLog('test', LogLevel.fatal, {
			shouldWriteLogLevel: true,
			shouldWriteTimestamp: true,
			metadataFormat: str => `${str} |`,
		});

		const columns = captured.split(' |');

		expect(timestampRegex.test(columns[0])).toBeTrue();
		expect(columns[1]).toBe('fatal');
		expect(columns[2]).toBe('test');
	});

	it('can display error strings', () => {
		let error: Error;

		try {
			throw new Error('This is a test error');
		}
		catch (e) {
			error = e;
		}

		const captured = captureLog(error);

		expect(captured).toContain('This is a test error');
	});
});

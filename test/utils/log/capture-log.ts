import { Log } from '../../../src/log';
import { LogLevel } from '../../../src/levels';
import { LogSettingsInterface } from '../../../src/settings';

/**
 * Captures and returns log output
 *
 * @param toLog String to log
 * @param level Log Level to use
 * @param options LogSettings
 * @returns Returns null if nothing was logged, otherwise returns the
 * 	logged string
 */
export function captureLog(
	toLog: any,
	level: LogLevel = LogLevel.info,
	options: Partial<LogSettingsInterface> = {}
): null|string {
	options = Object.assign({
		level: level,
		shouldWriteTimestamp: false,
		shouldWriteLogLevel: false,
	}, options);

	const log: Log = new Log(options);

	let logged = null;
	log.setWriter(level, (...str) => logged = str.join(''));

	log[LogLevel[level]](toLog);

	return logged;
}

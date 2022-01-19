import { LogLevel, LogLevelMethod } from './levels';
import { LogWriter } from './writers';

/**
 * Log implementation contract
 */
export interface LogContract {
	fatal: LogLevelMethod;
	error: LogLevelMethod;
	warn: LogLevelMethod;
	info: LogLevelMethod;
	debug: LogLevelMethod;
	setLevel: (level?: LogLevel) => void;
	setWriter: (level: LogLevel, writer: LogWriter) => void;
}

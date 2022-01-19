import { LogLevel } from '../levels/log-level';

/**
 * Interface for creating a new LogEntry
 */
export interface LogEntryInterface {
	level: LogLevel;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[];
}

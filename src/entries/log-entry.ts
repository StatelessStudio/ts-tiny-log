import { LogEntryInterface } from './log-entry-interface';
import { LogLevel } from '../levels/log-level';

/**
 * A LogEntry instance is a single entry in the log
 */
export class LogEntry implements LogEntryInterface {
	// Timestamp that the entry was logged
	public timestamp = new Date();

	// LogLevel the entry was logged against
	public level: LogLevel;

	// Data arguments
	public data;

	/**
	 * Create a new LogEntry
	 *
	 * @param attributes Entry attributes
	 */
	public constructor(attributes: LogEntryInterface) {
		this.level = attributes.level;
		this.data = attributes.data;
	}

	/**
	 * Get the current timestamp as a ISO UTC string
	 *
	 * @return Returns the timestamp string
	 */
	public getTimestamp(): string {
		return this.timestamp.toISOString();
	}
}

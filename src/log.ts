/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { LogContract } from './contract';
import { LogEntry, LogEntryInterface } from './entries';
import { LogLevel, nLogLevels, LogLevelMethod } from './levels';
import { LogSettingsInterface, defaultLogSettings } from './settings';
import { LogWriter } from './writers';

/**
 * Log
 */
export class Log implements LogContract {
	// Options
	protected settings: LogSettingsInterface = {
		...defaultLogSettings
	};

	// Log writers
	protected writers: Record<LogLevel, LogWriter> = {
		0: this.sink,					// none
		1: this.settings.standardOut,	// fatal
		2: this.settings.standardOut,	// error
		3: this.settings.standardOut,	// warn
		4: this.settings.standardOut,	// info
		5: this.settings.standardOut,	// debug
	};

	// Original methods store the original level method function, so
	//	that if the level is changed to a more permissive one, the
	//	functions can be reloaded
	protected originalMethods: Record<LogLevel, LogLevelMethod> = {
		0: this.sink,
		1: this.fatal,
		2: this.error,
		3: this.warn,
		4: this.info,
		5: this.debug,
	};

	/**
	 * Create a new Log instance
	 *
	 * @param settings Log settings
	 */
	public constructor(settings: Partial<LogSettingsInterface> = {}) {
		this.settings = Object.assign(this.settings, settings);

		this.setLevel(this.settings.level);

		for (let i = 0; i < nLogLevels; i++) {
			this.setWriter(i, i === 0 ? this.sink : this.settings.standardOut);
		}
	}

	/**
	 * Set the log level
	 *
	 * @param level Log level
	 */
	public setLevel(level: LogLevel): void {
		// Set active levels
		for (let i = 0; i <= level; i++) {
			// Reset the level method
			this[LogLevel[i]] = this.originalMethods[i];
		}

		// Set inactive levels
		for (let i = level + 1; i < nLogLevels; i++) {
			// Set the level method to a sink (for performance - sinked
			//	level methods will not invoke level checks)
			this[LogLevel[i]] = this.sink;
		}
	}

	/**
	 * Set the writer function for a level
	 *
	 * @param level
	 * @param writer
	 */
	public setWriter(level: LogLevel, writer: LogWriter): void {
		this.writers[level] = writer;
	}

	/**
	 * Write a fatal message to the log
	 *
	 * @param data
	 */
	public fatal(...data): void {
		this.log({
			level: LogLevel.fatal,
			data: data,
		});
	}

	/**
	 * Write an error message to the log
	 *
	 * @param data
	 */
	public error(...data): void {
		this.log({
			level: LogLevel.error,
			data: data,
		});
	}

	/**
	 * Write a warning message to the log
	 *
	 * @param data
	 */
	public warn(...data): void {
		this.log({
			level: LogLevel.warn,
			data: data,
		});
	}

	/**
	 * Write an info message to the log
	 *
	 * @param data
	 */
	public info(...data): void {
		this.log({
			level: LogLevel.info,
			data: data,
		});
	}

	/**
	 * Write a debug message to the log
	 *
	 * @param data
	 */
	public debug(...data): void {
		this.log({
			level: LogLevel.debug,
			data: data,
		});
	}

	/**
	 * Log a line
	 *
	 * @param attributes LogLine attributes
	 */
	protected log(attributes: LogEntryInterface): void {
		let line: LogEntry = new LogEntry(attributes);
		line = this.transform(line);

		this.writers[attributes.level](...line.data);
	}

	/**
	 * Run transformation functions on the line
	 *
	 * @param line
	 * @returns Returns the transformed LogEntry
	 */
	protected transform(line: LogEntry): LogEntry {
		line.data = this.stringifyAll(line.data);

		if (this.settings.shouldWriteLogLevel) {
			line = this.prependLogLevel(line);
		}

		if (this.settings.shouldWriteTimestamp) {
			line = this.prependTimestamp(line);
		}

		return line;
	}

	/**
	 * Sink a log level-method or log-writer
	 *
	 * @param a
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected sink(...data): void {
	}

	/**
	 * Mutator - Prepend the log level name to the message
	 *
	 * @param line
	 * @returns
	 */
	protected prependLogLevel(line: LogEntry): LogEntry {
		let levelName: string = LogLevel[line.level];

		while (levelName.length < 5) {
			// Largest level name is 6, so add spaces until it lines up
			levelName += ' ';
		}

		line.data.unshift(this.settings.metadataFormat(levelName));

		return line;
	}

	/**
	 * Mutator - Prepend the timestamp name to the message
	 *
	 * @param line
	 * @returns
	 */
	protected prependTimestamp(line: LogEntry): LogEntry {
		line.data.unshift(this.settings.metadataFormat(line.getTimestamp()));

		return line;
	}

	/**
	 * Stringify all log arguments
	 *
	 * @param data Log arguments
	 * @returns Stringified log arguments
	 */
	protected stringifyAll(data: any[]): any[] {
		for (let i = 0; i < data.length; i++) {
			data[i] = this.stringifyItem(data[i]);
		}

		return data;
	}

	/**
	 * Stringify a single log argument
	 *
	 * @param data Log argument
	 * @returns Returns stringified log argument
	 */
	protected stringifyItem(data: any): any {
		if (data instanceof Error) {
			data = this.stringifyError(data);
		}

		return data;
	}

	/**
	 * Stringify a javascript object
	 *
	 * @param obj Object
	 * @returns Stringified object
	 */
	protected stringifyObject(obj: any): string {
		return JSON.stringify(obj, null, '\t');
	}

	/**
	 * Stringify an Error instance
	 *
	 * @param error Error
	 * @returns Stringified Error information
	 */
	protected stringifyError(error) {
		let output = error.toString() + '\n' + error.stack;

		if ('context' in error) {
			output += '\n[Error Context]\n' +
				this.stringifyObject(error['context']);
		}

		return output;
	}
}

import { LogWriter } from '../writers/log-writer';
import { LogLevel } from '../levels/log-level';

/**
 * Settings for the log
 */
export interface LogSettingsInterface {
	// Log level
	level: LogLevel;

	// Should timestamps be prepended to the line?
	shouldWriteTimestamp: boolean;

	// Should the log level be prepended to the line?
	shouldWriteLogLevel: boolean;

	// Format of metadata that will be prepended to the line
	metadataFormat: (string) => string;

	// Standard error stream function
	standardError: LogWriter;

	// Standard output stream function
	standardOut: LogWriter;
}

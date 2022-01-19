/**
 * Log Levels
 */
export enum LogLevel {
	none,
	fatal,
	error,
	warn,
	info,
	debug
}

// Object.keys() on an enum gives both numeric and keys as values,
// 	so we divide by two to get the number of actual keys
export const nLogLevels: number = Object.keys(LogLevel).length / 2;

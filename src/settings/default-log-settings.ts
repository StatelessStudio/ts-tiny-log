import { LogSettingsInterface } from './log-settings-interface';
import { standardError } from '../writers/standard-error';
import { standardOut } from '../writers/standard-out';
import { LogLevel } from '../levels/log-level';

/**
 * Default log settings
 */
export const defaultLogSettings: LogSettingsInterface = {
	level: LogLevel.info,
	shouldWriteTimestamp: true,
	shouldWriteLogLevel: true,
	metadataFormat: (str) => `${str} |`,
	standardError: standardError,
	standardOut: standardOut
};

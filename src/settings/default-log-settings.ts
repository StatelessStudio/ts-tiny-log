import { LogSettingsInterface } from './log-settings-interface';
import { standardError } from '../writers/standard-error';
import { standardOut } from '../writers/standard-out';
import { LogLevel } from '../levels/log-level';
import { threadId } from 'worker_threads';

/**
 * Default log settings
 */
export const defaultLogSettings: LogSettingsInterface = {
	level: LogLevel.info,
	shouldWriteTimestamp: true,
	shouldWriteLogLevel: true,
	shouldWriteThreadId: false,
	threadId: threadId,
	metadataFormat: (str) => `${str} |`,
	standardError: standardError,
	standardOut: standardOut
};

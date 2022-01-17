import { captureLog } from './capture-log';
import { LogLevel } from '../../../src/levels';

/**
 * Execute, capture, and assert a log level method's output
 *
 * @param level Log level to test
 */
export function testLogLevelMethod(level: LogLevel = LogLevel.info): void {
	const str = 'test';
	const captured = captureLog(str, level);

	expect(captured).toBe(str);
}

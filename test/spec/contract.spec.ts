/* eslint-disable @typescript-eslint/no-unused-vars */

import { LogContract } from '../../src/contract';
import { LogLevel } from '../../src/levels';
import { LogWriter } from '../../src/writers';

describe('LogContract', () => {
	const log: LogContract = {
		fatal: () => {},
		error: () => {},
		warn: () => {},
		info: () => {},
		debug: () => {},
		setLevel: (l?: LogLevel) => {},
		setWriter: (l: LogLevel, w: LogWriter) => {}
	};

	it('has a fatal method', () => {
		expect(log.fatal).toBeDefined();
	});

	it('has an error method', () => {
		expect(log.error).toBeDefined();
	});

	it('has a warn method', () => {
		expect(log.warn).toBeDefined();
	});

	it('has an info method', () => {
		expect(log.info).toBeDefined();
	});

	it('has a debug method', () => {
		expect(log.debug).toBeDefined();
	});

	it('has a setLevel method', () => {
		expect(log.setLevel).toBeDefined();
	});

	it('has a setWriter method', () => {
		expect(log.setWriter).toBeDefined();
	});
});

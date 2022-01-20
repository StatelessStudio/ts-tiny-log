import { Log } from '../../src';
import { log } from '../../src/default';

describe('default', () => {
	it('exports a default log instance', () => {
		expect(log).toBeDefined();
		expect(log instanceof Log).toBeTrue();
	});
});

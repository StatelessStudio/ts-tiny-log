import { LogLevel } from '../src/levels';
import { log } from '../src/log';
import './log';

log.fatal('Abort!');
log.error('An error!', new Error('Broken!'));
log.warn('Warning!');
log.info('hello!');
log.debug('hidden!');

log.setLevel(LogLevel.debug);
log.debug('shown!', {
	foo: 'bar'
});

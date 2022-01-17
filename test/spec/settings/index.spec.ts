import * as settings from '../../../src/settings';

describe('settings/index', () => {
	it('exports defaultLogSettings', () => {
		expect(settings.defaultLogSettings).toBeDefined();
	});

	it('exports LogSettingsInterface', () => {
		const settings: Partial<settings.LogSettingsInterface> = {};

		expect(settings).toBeDefined();
	});
});

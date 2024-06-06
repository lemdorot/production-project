import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
	test('should work with filled state', () => {
		const data = {
			username: 'admin',
			age: 22,
			country: Country.Ukraine,
			lastname: 'ulbi tv',
			first: 'sdf',
			city: 'qwe',
			currency: Currency.USD,
		};
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});

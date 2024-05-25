import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface componentRouterOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export function componentRouter(component: ReactNode, options: componentRouterOptions = {}) {
	const {
		route = '/',
		initialState,
	} = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>,
	);
}

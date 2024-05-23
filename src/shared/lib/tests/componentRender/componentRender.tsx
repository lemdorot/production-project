import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '../../../config/i18n/i18nForTests';

export interface componentRouterOptions {
	route?: string;
}

export function componentRouter(component: ReactNode, options: componentRouterOptions = {}) {
	const {
		route = '/',
	} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nForTests}>
				{component}
			</I18nextProvider>
		</MemoryRouter>,
	);
}

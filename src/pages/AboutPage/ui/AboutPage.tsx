import React from 'react'
import { useTranslation } from 'react-i18next';

interface Props { }

const AboutPage = () => {
	const { t } = useTranslation('about');

	return (
		<div>
			{t('О сайте')}
		</div>
	);
};

export default AboutPage;

import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
	className ?: string;
}

export const {{ pascalCase }} = memo((props: {{pascalCase}}Props) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.{{ pascalCase }}, {}, [className])}>

		</div >
	);
});

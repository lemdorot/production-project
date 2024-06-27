import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
	const { t } = useTranslation('main');
	const [value, setValue] = useState('');

	// const onChange = (val: string) => {
	// 	setValue(val);
	// };

	return (
		<Page>
			{t('Главная страница')}
			<div>sdfsafd</div>
			<HStack>
				<div>sdfsafd</div>
				<ListBox
					defaultValue="Выберите значение"
					onChange={(value: string) => {}}
					value={undefined}
					items={[
						{ value: '1', content: '123' },
						{ value: '12', content: 'asf', disabled: true },
						{ value: '13', content: 'asf' },
					]}
				/>
			</HStack>
			<div>sdfsafd</div>
			<div>sdfsafd</div>
			<div>sdfsafd</div>
			<div>sdfsafd</div>
			<div>sdfsafd</div>
		</Page>
	);
};

export default MainPage;

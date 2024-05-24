import { classNames } from 'shared/lib/classNames/ui/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{/* eslint-disable-next-line */}
				{t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo accusantium non quia saepe nulla amet, repellat officia dicta laborum, harum itaque corporis aliquid atque laudantium asperiores animi quae ab?')};
			</Modal>
		</div>
	);
};

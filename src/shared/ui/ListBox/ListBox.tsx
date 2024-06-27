import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
	items?: ListBoxItem[];
	className?: string;
	value?: string;
	defaultValue?: string;
	onChange: (value: string) => void;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top left': cls.optionsTopLeft,
	'top right': cls.optionsTopRight,
};

export function ListBox(props: ListBoxProps) {
	const {
		className, items, value, defaultValue, onChange, readonly, direction = 'bottom right', label,
	} = props;

	const optionsClasses = [mapDirectionClass[direction]];

	return (
		<HStack gap="4">
			{label && <span>{`${label}>`}</span>}
			<HListBox
				disabled={readonly}
				as="div"
				className={classNames(cls.ListBox, {}, [className])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button disabled={readonly} className={cls.trigger}>
					<Button disabled={readonly}>
						{value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={classNames(
										cls.item,
										{
											[cls.active]: active,
											[cls.disabled]: item.disabled,
										},
									)}
								>
									{selected && '!!!'}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	);
}

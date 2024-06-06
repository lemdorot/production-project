import { ComponentStory, ComponentMeta } from '@storybook/react';
import { {{ pascalCase }} } from './{{ pascalCase }}';

export default {
	title: 'shared/componentName',
	component: {{ pascalCase }},
argTypes: {
	backgroundColor: { control: 'color' },
},
} as ComponentMeta < typeof {{ pascalCase }}>;

const Template: ComponentStory<typeof {{ pascalCase }}> = (args) => <{{ pascalCase }} { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
};
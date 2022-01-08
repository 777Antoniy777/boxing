import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Test/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  className: 'dssd',
  type: 'submit',
  onClick: () => {}
};
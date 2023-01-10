/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import Btn from './button';

type Story = StoryObj<typeof Btn>;

// const Button = () => <button>Text</button>;

const name = 'Button';
const meta: Meta<typeof Btn> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Form/Button',
  component: Btn
};

export default meta;

export const Button: Story = {
  args: {
    disabled: true,
    children: 'Button'
  }
};

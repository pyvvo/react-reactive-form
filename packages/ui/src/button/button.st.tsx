/* eslint-disable react/button-has-type */
import { TextInput } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { wait } from '@/utils';
import Btn from './button';

type Story = StoryObj<typeof Btn>;

const ButtonM = () => <button data-testid="button">Text</button>;
const Input = () => <TextInput data-testid="text" type="text" />;

const meta: Meta<typeof Btn> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Form/Button',
  component: Input
};

export default meta;

export const Button: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByTestId('text');
    await wait(2000);
    userEvent.type(field, 'tttt');
  },
  args: {
    disabled: false,
    children: 'Button'
  }
};

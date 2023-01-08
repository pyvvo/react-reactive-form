/* eslint-disable react/button-has-type */
// import { Button } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const Button = () => <button>Text</button>;

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button
};

export default meta;

export const Primary: Story = {
  render: () => <Button />
};

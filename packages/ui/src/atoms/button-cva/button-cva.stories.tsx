/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { AuthGuard } from '@/auth';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    intent: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  }
};

export default meta;

export const Buttono: Story = {
  args: {
    // intent: 'primary'
    // size: 'large'
    className: 'hover:bg-blue-200'
  }
};

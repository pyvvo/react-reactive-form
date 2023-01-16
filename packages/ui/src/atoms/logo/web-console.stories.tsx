/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import WebConsoleIcon from './web-console';

type Story = StoryObj<typeof WebConsoleIcon>;

const meta: Meta<typeof WebConsoleIcon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Logos/WebConsole',
  component: WebConsoleIcon
};

export default meta;

export const WebConsole: Story = {
  args: {
    height: 'auto',
    width: '200px'
  }
};

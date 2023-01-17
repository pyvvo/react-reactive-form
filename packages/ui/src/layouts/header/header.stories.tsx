/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconAffiliate,
  IconCloudComputing,
  IconDots,
  IconHome2,
  IconSettings,
  IconShieldHalfFilled
} from '@tabler/icons';
import {
  ReactRouterDecorator,
  ReactRouterLoggerDecorator
} from '@/story-utils';
import H from './header';

type Story = StoryObj<typeof H>;

const meta: Meta<typeof H> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Header',
  component: H,
  decorators: [ReactRouterLoggerDecorator, ReactRouterDecorator]
};

export default meta;

export const Header: Story = {
  args: {
    moduleName: 'Dashboard'
  }
};

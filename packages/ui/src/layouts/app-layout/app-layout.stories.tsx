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
import AL from './app-layout';

type Story = StoryObj<typeof AL>;

const meta: Meta<typeof AL> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/AppLayout',
  component: AL,
  decorators: [ReactRouterLoggerDecorator, ReactRouterDecorator]
};

export default meta;

export const AppLayout: Story = {
  args: {
    modules: [
      {
        icon: IconHome2,
        label: 'Dashboard',
        color: 'indigo',
        isBottom: false,
        to: '/dashboard'
      },
      {
        icon: IconCloudComputing,
        label: 'Collector',
        color: 'indigo',
        to: '/collector'
      },
      {
        icon: IconAffiliate,
        label: 'Dispatcher',
        color: 'grape',
        to: '/dispatcher'
      },
      {
        icon: IconShieldHalfFilled,
        label: 'IAM',
        to: '/iam'
      },
      {
        icon: IconDots,
        label: 'More',
        to: '/'
      },
      {
        icon: IconSettings,
        label: 'Settings',
        isBottom: true,
        to: '/settings'
      }
    ]
  }
};

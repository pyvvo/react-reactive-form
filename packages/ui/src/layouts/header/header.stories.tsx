/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import Chance from 'chance';
import { SpotlightAction } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText } from '@tabler/icons';
import {
  MantineSpotlightDecorator,
  ReactRouterDecorator,
  ReactRouterLoggerDecorator
} from '@/story-utils';
import H from './header';
import { Simplify } from '@/types';

type ComponentProps = Simplify<
  Parameters<typeof H>[0] & {
    actions: SpotlightAction[];
  }
>;

type Story = StoryObj<ComponentProps>;

const meta: Meta<ComponentProps> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Header',
  component: H,
  decorators: [
    ReactRouterLoggerDecorator,
    ReactRouterDecorator,
    MantineSpotlightDecorator
  ]
};

export default meta;

const chance = new Chance();
const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size={18} />
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size={18} />
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />
  }
];

export const Header: Story = {
  args: {
    moduleName: 'Dashboard',
    imageSrc: chance.avatar({
      protocol: 'https',
      email: 'mail@victorquinn.com'
    }),
    offset: 0,
    actions
  }
};

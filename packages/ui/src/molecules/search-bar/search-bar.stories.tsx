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
import SB from './index';

type Story = StoryObj<typeof SB>;

const meta: Meta<typeof SB> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules/SearchBar',
  component: SB
};

export default meta;

export const SearchBar: Story = {};

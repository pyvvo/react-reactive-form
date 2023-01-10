/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { ReactiveFormDecorator } from '@/story-decorators';
import { ReactiveFieldStoryType } from '../types';
import ReactiveField from './reactive-switch';
import { SwitchCustomProps } from './types';

type Story = StoryObj<ReactiveFieldStoryType<SwitchCustomProps>>;

const meta: Meta<typeof ReactiveField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Form/ReactiveSwitch',
  component: ReactiveField,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactiveSwitch: Story = {
  args: {
    fieldKey: 'switch',
    label: 'switch',
    options: {
      required: false
    },
    customProps: {
      disabled: false
    }
  }
};

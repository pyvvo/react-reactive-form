/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { waitFor, within } from '@testing-library/dom';
import { expect } from '@storybook/jest';
import { getReactiveRef, ReactiveFormDecorator } from '@/story-utils';
import { ReactiveFieldStoryType } from '../types';
import ReactiveField from './reactive-select';
import { SelectCustomProps } from './types';
import { wait } from '@/utils';

type Story = StoryObj<ReactiveFieldStoryType<SelectCustomProps>>;

const meta: Meta<typeof ReactiveField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Field/ReactiveSelect',
  component: ReactiveField,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactiveSelect: Story = {
  play: async ({ canvasElement, args: { fieldKey } }) => {
    const { fieldRef, submitRef, resultRef } = getReactiveRef(
      canvasElement,
      fieldKey
    );

    const canvas = within(canvasElement);

    await userEvent.click(fieldRef);
    await wait(200);

    const optionRef = canvas.getByText('React');
    await userEvent.click(optionRef);
    await userEvent.click(submitRef);
    await waitFor(() => {
      expect(JSON.parse(resultRef.value)).toEqual({
        value: 'React'
      });
    });
  },
  args: {
    fieldKey: 'value',
    label: 'select',
    options: {
      required: false
    },
    customProps: {
      disabled: false,
      options: ['React', 'Angular', 'Svelte', 'Vue']
    }
  }
};

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { waitFor, within } from '@testing-library/dom';
import { expect } from '@storybook/jest';
import { getReactiveRef, ReactiveFormDecorator } from '@/story-utils';
import { ReactiveFieldStoryType } from '../types';
import ReactiveField from './reactive-autocomplete';
import { AutocompleteCustomProps } from './types';
import { wait } from '@/utils';

type Story = StoryObj<ReactiveFieldStoryType<AutocompleteCustomProps>>;

const meta: Meta<typeof ReactiveField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Field/ReactiveAutocomplete',
  component: ReactiveField,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactiveAutocomplete: Story = {
  play: async ({ canvasElement, args: { fieldKey } }) => {
    async function selectOption(option: string, canvasElement: HTMLElement) {
      const canvas = within(canvasElement);

      const optionRef = canvas.getByText(option);
      await userEvent.click(optionRef);
    }
    const { fieldRef, submitRef, resultRef } = getReactiveRef(
      canvasElement,
      fieldKey
    );

    await userEvent.type(fieldRef, 'Re');
    await wait(200);

    await selectOption('React', canvasElement);

    await userEvent.click(submitRef);
    await waitFor(() => {
      expect(JSON.parse(resultRef.value)).toEqual({
        value: 'React'
      });
    });
  },
  args: {
    fieldKey: 'value',
    label: 'Autocomplete',
    options: {
      required: false
    },
    customProps: {
      disabled: false,
      data: ['React', 'Angular', 'Svelte', 'Vue']
    }
  }
};

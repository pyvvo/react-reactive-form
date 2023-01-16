/* eslint-disable react/button-has-type */
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor } from '@storybook/testing-library';
import { getReactiveRef, ReactiveFormDecorator } from '@/story-utils';
import { ReactiveFieldStoryType } from '../types';
import RTF from './reactive-password-field';
import { PasswordFieldCustomProps } from './types';

type Story = StoryObj<ReactiveFieldStoryType<PasswordFieldCustomProps>>;

const meta: Meta<typeof RTF> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Field/ReactivePasswordField',
  component: RTF,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactivePasswordField: Story = {
  play: async ({ canvasElement, args: { fieldKey } }) => {
    const { fieldRef, submitRef, resultRef } = getReactiveRef(
      canvasElement,
      fieldKey
    );

    await userEvent.type(fieldRef, 'secret');
    await userEvent.click(submitRef);
    // expect(JSON.parse(resultRef.value)).toEqual({
    //   value: 'example'
    // });
    await waitFor(() => {
      expect(JSON.parse(resultRef.value)).toEqual({
        value: 'secret'
      });
    });
  },
  args: {
    fieldKey: 'value',
    label: 'test',
    options: {
      required: true
    },
    customProps: {
      disabled: false
    }
  }
};

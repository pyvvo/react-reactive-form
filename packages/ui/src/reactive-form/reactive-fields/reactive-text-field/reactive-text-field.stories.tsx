/* eslint-disable react/button-has-type */
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor } from '@storybook/testing-library';
import { getReactiveRef, ReactiveFieldDecorator } from '@/story-utils';
import { ReactiveFieldStoryType } from '../types';
import RTF from './reactive-text-field';
import { TextFieldCustomProps } from './types';

type Story = StoryObj<ReactiveFieldStoryType<TextFieldCustomProps>>;

const meta: Meta<typeof RTF> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Field/ReactiveTextField ',
  component: RTF,
  decorators: [ReactiveFieldDecorator]
};

export default meta;

export const ReactiveTextField: Story = {
  play: async ({ canvasElement, args: { fieldKey } }) => {
    const { fieldRef, submitRef, resultRef } = getReactiveRef(
      canvasElement,
      fieldKey
    );

    await userEvent.type(fieldRef, 'example');
    await userEvent.click(submitRef);
    // expect(JSON.parse(resultRef.value)).toEqual({
    //   value: 'example'
    // });
    await waitFor(() => {
      expect(JSON.parse(resultRef.value)).toEqual({
        value: 'example'
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

// const defaultValues = {
//   username: '',
//   password: ''
// };

// type Data = typeof defaultValues;

// export const ReactiveText: Story<Data> = {
//   args: {
//     meta: [
//       {
//         name: 'fddffd',
//         fields: [
//           {
//             fieldKey: 'username',
//             label: 'username',
//             type: 'text',
//             options: {
//               required: true
//             }
//           }
//         ]
//       }
//     ]
//   }
// };

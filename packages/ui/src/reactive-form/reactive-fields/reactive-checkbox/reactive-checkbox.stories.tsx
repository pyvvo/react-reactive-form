/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';
import { within, waitFor } from '@testing-library/dom';
import { ReactiveFormDecorator } from '@/story-decorators';
import { ReactiveFieldStoryType } from '../types';
import ReactiveField from './reactive-checkbox';
import { CheckCustomProps } from './types';

type Story = StoryObj<ReactiveFieldStoryType<CheckCustomProps>>;

const meta: Meta<typeof ReactiveField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Field/ReactiveCheckbox ',
  component: ReactiveField,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactiveCheckbox: Story = {
  play: async ({ canvasElement, args: { fieldKey } }) => {
    const canvas = within(canvasElement);
    const fieldRef = canvas.getByTestId(fieldKey);
    const submitRef = canvas.getByTestId('submit');
    const resultRef = canvas.getByTestId<HTMLTextAreaElement>('form-result');

    await userEvent.click(fieldRef);
    await userEvent.click(submitRef);
    await waitFor(() => {
      expect(JSON.parse(resultRef.value)).toEqual({
        value: true
      });
    });
  },
  args: {
    fieldKey: 'value',
    label: 'test',
    options: {
      required: false
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

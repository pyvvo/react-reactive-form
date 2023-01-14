/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { ReactiveFormDecorator } from '@/story-decorators';
import { ReactiveFieldStoryType } from '../types';
import RTF from './reactive-text-field';
import { TextFieldCustomProps } from './types';

type Story = StoryObj<ReactiveFieldStoryType<TextFieldCustomProps>>;

const meta: Meta<typeof RTF> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Form/ReactiveTextField ',
  component: RTF,
  decorators: [ReactiveFormDecorator]
};

export default meta;

export const ReactiveTextField: Story = {
  args: {
    fieldKey: 'text',
    label: 'test',
    options: {
      required: true
    },
    customProps: {
      disabled: true
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

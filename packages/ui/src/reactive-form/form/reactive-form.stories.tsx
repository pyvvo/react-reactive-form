/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';

import { JSONData } from '@/types';
import RF, { IReactiveForm } from './reactive-form';
import { ReactiveFormDecorator } from '@/story-utils';

type Story<TFormValues extends JSONData> = StoryObj<
  Omit<IReactiveForm<TFormValues>, 'form'>
>;

const meta: Meta<typeof RF> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Reactive Form/ReactiveForm',
  component: RF
};

export default meta;

const defaultValues = {
  username: 'Lloyd',
  password: 'secret',
  age: 18,
  isActive: true,
  enabled: true,
  country: 'France',
  skills: [] as string[],
  billingRate: 20,
  billingPeriod: ''
};

type Data = typeof defaultValues;

export const ReactiveForm: Story<Data> = {
  args: {
    meta: [
      {
        name: 'fddffd',
        fields: [
          {
            fieldKey: 'username',
            label: 'Username',
            type: 'text',
            options: {
              required: true
            }
          },
          {
            fieldKey: 'age',
            label: 'Age',
            type: 'number',
            options: {
              required: true
            }
          },
          {
            fieldKey: 'enabled',
            label: 'Enabled',
            type: 'switch'
          },
          {
            fieldKey: 'password',
            label: 'Password',
            type: 'password',
            options: {
              required: true
            }
          },
          {
            fieldKey: 'isActive',
            label: 'Is Active',
            type: 'checkbox',
            customProps: {
              disabled: true
            }
          },
          {
            fieldKey: 'skills',
            label: 'Skills',
            type: 'multi-select',
            customProps: {
              options: ['Devops', 'Full-stack', 'Management']
            }
          },
          {
            fieldKey: 'country',
            label: 'Country',
            type: 'autocomplete',
            customProps: {
              data: ['France', 'Columbia', 'Canada', 'Senegal']
            }
          },
          {
            fieldKey: 'billingRate',
            label: 'Billing Rate',
            type: 'range',
            customProps: {
              marks: [
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' }
              ]
            }
          },
          {
            fieldKey: 'billingPeriod',
            label: 'Billing Period',
            type: 'radio',
            customProps: {
              data: [
                { value: 'monthly', label: 'MonthLy' },
                { value: 'yearly', label: 'Yearly' }
              ]
            }
          }
        ]
      }
    ]
  },
  decorators: [ReactiveFormDecorator(defaultValues)]
};

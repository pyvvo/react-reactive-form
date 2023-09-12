/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import Typography from '.';

type Story = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    },
    ff: {
      options: ['sans', 'serif', 'mono'],
      control: { type: 'select' }
    },
    fs: {
      options: ['italic', 'normal'],
      control: { type: 'select' }
    },
    fw: {
      options: [
        'black',
        'extrabold',
        'bold',
        'semibold',
        'medium',
        'normal',
        'light',
        'extralight',
        'thin'
      ],
      control: { type: 'select' }
    },
    align: {
      options: ['start', 'justify', 'right', 'center', 'left', 'end'],
      control: { type: 'select' }
    },
    cl: {
      control: {
        type: 'color'
      }
    },
    line: {
      options: ['noline', 'underline', 'overline', 'through'],
      control: { type: 'select' }
    },
    tt: {
      options: ['normal', 'uppercase', 'lowercase', 'capitalize'],
      control: { type: 'select' }
    }
  }
};

export default meta;

export const Text: Story = {
  args: {
    size: 'xs',
    children: 'Text',
    align: 'center'
  }
};

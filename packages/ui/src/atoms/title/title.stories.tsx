/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import Title from '.';
import { AuthGuard } from '@/auth';
import useKeycloak from '@/auth/auth.hooks';

type Story = StoryObj<typeof Title>;

const meta: Meta<typeof Title> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Title',
  component: Title,
  // decorators: [
  //   (Story) => {

  //     return (
  //       <></>
  //     );
  //   }
  // ],
  argTypes: {
    cl: {
      // options: ['red', 'gray', 'orange', 'lime', 'black'],
      control: { type: 'color' }
    },
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' }
    },
    align: {
      options: ['left', 'right', 'justify', 'center'],
      control: { type: 'select' }
    },
    underline: {
      options: [true, false],
      control: { type: 'select' }
    }
  }
};

export default meta;

export const TitleComponent: Story = {
  args: {
    // intent: 'primary'
    // size: 'large'
    children: 'React',
    className: 'text-blue-500'
  }
};

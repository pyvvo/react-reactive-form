/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import HMDG from './hm-data-grid';
import { IColumn } from './types';

type Story = StoryObj<typeof HMDG>;

const meta: Meta<typeof HMDG> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Features/DataGrid',
  component: HMDG
};

export default meta;

interface ICollector {
  name: string;
  operator: string;
  subscriber: string;
  email: string;
  password: string;
}

const rows: ICollector[] = [
  {
    name: 'Test1',
    operator: 'orange',
    subscriber: 'birdz1',
    email: 'test1@mail.coom',
    password: ''
  },
  {
    name: 'Test2',
    operator: 'orange',
    subscriber: 'birdz2',
    email: 'test2@mail.coom',
    password: ''
  },
  {
    name: 'Test3',
    operator: 'orange',
    subscriber: 'birdz3',
    email: 'test3@mail.coom',
    password: ''
  },
  {
    name: 'Test4',
    operator: 'orange',
    subscriber: 'birdz4',
    email: 'test3@mail.coom',
    password: ''
  }
];

const columns: IColumn<ICollector>[] = [
  {
    key: 'name',
    name: 'Name'
  },
  { key: 'operator', name: 'Operator' },
  { key: 'subscriber', name: 'Subscriber' }
];

export const DataGrid: Story = {
  args: {
    withSorting: true,
    rows,
    columns,
    onRowClick: (row) => action('row')(row)
  }
};

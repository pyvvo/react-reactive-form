/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import HMDG from './hm-data-grid';
import { IColumn } from './types';
import { useState } from 'react';
import { IDecoratorParams } from '@/story-utils/decorators/common';

type Story = StoryObj<typeof HMDG>;

const meta: Meta<typeof HMDG> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Features/DataGrid',
  component: HMDG,
  decorators: [
    (Story, props: IDecoratorParams['props']) => {
      const {
        args: { actions, ...rest }
      } = props;
      const [selectedRows, setSelectedRows] = useState(
        (): ReadonlySet<string> => new Set()
      );
      console.log(selectedRows);

      return (
        <Story
          args={{
            selectedRows: selectedRows,
            onSelectedRowsChange: (row) => setSelectedRows(row),
            ...rest
          }}
        />
      );
    }
  ]
};

export default meta;

interface ICollector {
  id: string;
  name: string;
  operator: string;
  subscriber: string;
  email: string;
  password: string;
  isActive: boolean;
}

const rows: ICollector[] = [
  {
    id: 'sdsds',
    name: 'Test1',
    operator: 'orange',
    subscriber: 'birdz1',
    email: 'test1@mail.coom',
    password: '',
    isActive: true
  },
  {
    id: 'sddsdgdds',
    name: 'Test2',
    operator: 'orange',
    subscriber: 'birdz2',
    email: 'test2@mail.coom',
    password: '',
    isActive: true
  },
  {
    id: 'sdsdsae',
    name: 'Test3',
    operator: 'orange',
    subscriber: 'birdz3',
    email: 'test3@mail.coom',
    password: '',
    isActive: false
  },
  {
    id: 'sdsdsz32',
    name: 'Test4',
    operator: 'orange',
    subscriber: 'birdz4',
    email: 'test3@mail.coom',
    password: '',
    isActive: false
  }
];

const columns: IColumn<ICollector>[] = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'name',
    name: 'Name'
  },
  { key: 'operator', name: 'Operator' },
  { key: 'subscriber', name: 'Subscriber' },
  { key: 'isActive', name: 'Active' }
];
function rowKeyGetter(row: any) {
  return row.id;
}
export const DataGrid: Story = {
  args: {
    withRowSelection: true,
    withSorting: true,
    rows,
    columns,
    rowKeyGetter: rowKeyGetter,
    onRowClick: (row) => action('row')(row)
  }
};

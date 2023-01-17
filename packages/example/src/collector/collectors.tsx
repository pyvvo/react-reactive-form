/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { HMDataGrid, IColumn } from '@hm/ui';
import { Box, Button } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Store from './store.service';

const Collectors: FC = () => {
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<string>>(
    () => new Set()
  );
  const navigate = useNavigate();
  type Data = ReturnType<typeof Store.getRows>;

  //   useEffect(() => {
  //     adminCompanyStore.loadData();
  //   }, [adminCompanyStore]);

  const columns: IColumn<Data[0]>[] = [
    {
      key: 'name',
      name: 'Name'
    },
    { key: 'operator', name: 'Operator' },
    { key: 'subscriber', name: 'Subscriber' }
  ];

  return (
    <Box sx={{ paddingBlock: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>New</Button>
      </Box>
      <HMDataGrid
        // withRowSelection
        withSorting
        columns={columns}
        rows={Store.getRows()}
        onRowClick={({ name }) => navigate(`./${name}`)}
        // selectedRows={adminCompanyStore.selectedRows}
        onRowSelectionChange={setSelectedRows}
        selectedRows={selectedRows}
      />
      <Outlet />
    </Box>
  );
};

export default Collectors;

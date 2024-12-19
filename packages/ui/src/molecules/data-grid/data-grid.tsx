/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import DataGrid, { DataGridProps } from 'react-data-grid';
import type { Key } from 'react';

// For testing the native DataGrid
const LocalGrid = <R, SR = unknown, K extends Key = Key>(
  props: DataGridProps<R, SR, K>
) => {
  return <DataGrid {...props} />;
};

export default LocalGrid;

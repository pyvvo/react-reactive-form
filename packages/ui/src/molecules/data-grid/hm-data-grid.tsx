/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import 'react-data-grid/lib/styles.css'
import { Pagination, useMantineTheme } from '@mantine/core';
import DataGrid from 'react-data-grid';
import DataGridContainer from './hm/data-grid-container';
import { IHMDataGrid, RowHeight } from './hm/types';
import useRGDParser from './hm/use-data-gri-parser.hook';
import useRenderRow from './hm/use-render-row.hook';
import RenderCheckbox from "./hm/render-checkbox";

const HMDataGrid = <TRow extends Record<string, any>>(
  props: IHMDataGrid<TRow>
) => {
  const theme = useMantineTheme();
  const {
    columns,
    components ={DGSelectComponent:RenderCheckbox},
    onRowsChange,
    rows,
    selectedRows,
    headerRowHeight,
    rowHeight = RowHeight.standard,
    onRowClick,
    onSelectedRowsChange,
    onSort,
    rowKeyGetter = (row: TRow) => row.id,
    withColumnResizing = false,
    withRowSelection = false,
    withSorting = false
  } = props;

  const params = {
    components,
    columns,
    rows,
    onRowsChange,
    selectedRows,
    headerRowHeight,
    rowHeight,
    onRowClick,
    onSelectedRowsChange,
    onSort,
    rowKeyGetter,
    withColumnResizing,
    withRowSelection,
    withSorting
  };

  // this hook is required for flattering row and row render
  const data = useRenderRow<TRow>(params);
  
  const parsedData = useRGDParser<TRow>(data);

  return (
    <>
      <DataGridContainer theme={theme}>
        <DataGrid  {...parsedData}  />
      </DataGridContainer>
      {/* <Pagination total={10} /> */}
    </>
  );
};

export default HMDataGrid;

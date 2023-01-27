/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
import { FC, Children, isValidElement, cloneElement, ReactNode } from 'react';
// import { Global } from "@emotion/react";
import styled from '@emotion/styled';
import {
  Button,
  Text,
  Global,
  createStyles,
  Box,
  Paper,
  MantineTheme
} from '@mantine/core';

const List = styled('div')`
  width: 100%;
  .rdg {
    /* border-bottom: none;
    border-top: none; */
    border-style: none;

    @media (min-height: 800px) {
      height: 100%;
    }
  }
  .rdg-header-sort-cell {
    align-items: center;
  }
  .rdg .rdg-header-row:nth-of-type(1) {
    /* border-bottom: none;
    border-bottom-width: 0px; */

    & .rdg-cell {
      border-style: none;
      /* min-width: max-content; */
    }
  }

  .rdg .rdg-row:nth-of-type(1) {
    /* border-top: none; */
  }
  .rdg-row,
  .rdg-header-row {
    & [aria-selected='true'] {
      box-shadow: none;
    }
  }
  & .rdg-cell {
    display: flex;
    border-right: none;
    padding: 0 16px 0 16px;
  }
`;

const EmptyRowsRenderer = () => (
  <div style={{ textAlign: 'center', gridColumn: '1/-1' }}>
    Nothing to show
    <span lang="ja" title="ショボーン">
      (´・ω・`)
    </span>
  </div>
);

const useStyles = createStyles((theme) => ({
  root: {
    marginBlock: '8px',
    height: 'auto'
  },

  header: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'light' ? '#ddd' : ' #444'
    }`,
    borderRadius: '12px 12px 0 0',
    minHeight: '24px',
    display: 'flex',
    // justifyContent: 'flex-end',
    paddingInline: '12px',
    paddingBlock: '8px'
  },

  footer: {
    // backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212121",
    // borderInline: `1px solid ${
    //   theme.colorScheme === 'light' ? '#ddd' : ' #444'
    // }`,
    // borderBottom: `1px solid ${
    //   theme.colorScheme === 'light' ? '#ddd' : ' #444'
    // }`,
    // border: "1px solid #ddd",
    borderRadius: '0 0 12px 12px',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingInline: '12px',
    paddingBlock: '12px'
  }
}));

interface IDataGridContainer {
  theme: MantineTheme;
  children: ReactNode;
}

const DataGridContainer: FC<IDataGridContainer> = (props) => {
  const { children, theme, ...rest } = props;
  const { classes } = useStyles();
  let rowCount = 1;
  let selectedRowCount = 0;
  const modifiedChildren = Children.map(children as any, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (isValidElement(child as any)) {
      rowCount = child.props.rows.length + 1;
      selectedRowCount = child.props.selectedRows
        ? child.props.selectedRows.size
        : 0;
      return cloneElement<any>(child, {
        className: theme.colorScheme === 'dark' ? 'rdg-dark' : 'rdg-light',
        components: { noRowsFallback: <EmptyRowsRenderer /> }
      });
    }
    return child;
  });
  return (
    <Paper shadow="sm" withBorder className={classes.root} {...rest}>
      <Global
        styles={{
          '.rdg ': {
            '--row-count': `${rowCount}`,
            minHeight: `${
              rowCount >= 13
                ? 'calc(100vh - 310px)'
                : 'calc(var(--header-row-height) * var(--row-count))'
            }`,
            '--header-background-color': theme.colors[theme.primaryColor][0],
            '--row-hover-background-color': theme.colors[theme.primaryColor][0]
          }
        }}
      />
      <Box className={classes.header}>
        {selectedRowCount ? (
          <Text variant="text">
            {selectedRowCount}
            item(s) selected
          </Text>
        ) : null}
      </Box>
      <List>{modifiedChildren}</List>
      <Box className={classes.footer}>
        {/* <Button>
          <NavigateBefore />
        </Button>
        <Button >
          <NavigateNext />
        </Button>

        <LoadMore color="primary" variant="contained" size="small">
          Load more
        </LoadMore> */}
      </Box>
    </Paper>
  );
};

export default DataGridContainer;

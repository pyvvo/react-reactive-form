/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';

export type CheckCustomProps = {
  size?: MantineSize;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

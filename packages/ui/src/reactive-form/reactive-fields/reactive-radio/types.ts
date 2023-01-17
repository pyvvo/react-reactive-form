/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineNumberSize, MantineSize } from '@mantine/core';

export type RadioCustomProps = {
  data: { value: string; label: string }[];
  /** Space between label and inputs */
  offset?: MantineNumberSize;
  /** Spacing between radios in horizontal orientation */
  spacing?: MantineNumberSize;
  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';
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

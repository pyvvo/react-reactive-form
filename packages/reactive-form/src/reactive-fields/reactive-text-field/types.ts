/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';

export type TextFieldCustomProps = {
  type?: 'text' | 'number';
  label?: string;
  size?: MantineSize;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

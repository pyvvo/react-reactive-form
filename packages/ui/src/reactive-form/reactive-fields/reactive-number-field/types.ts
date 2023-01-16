/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';

export type NumberFieldCustomProps = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: MantineSize;
  parser?: (value: string | undefined) => string | undefined;
  formatter?: (value: string | undefined) => string;
  max?: number;
  min?: number;
};

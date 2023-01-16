/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';

export type SelectCustomProps = {
  options: Array<string>;
  size?: MantineSize;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onDropdownOpen?: () => void;
};

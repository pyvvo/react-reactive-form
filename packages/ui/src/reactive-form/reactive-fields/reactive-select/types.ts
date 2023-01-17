/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize, SelectItem } from '@mantine/core';

export type SelectCustomProps = {
  options: (string | SelectItem)[];
  size?: MantineSize;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onDropdownOpen?: () => void;
};

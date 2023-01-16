/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize, SelectItem } from '@mantine/core';
import { ReactNode } from 'react';

export type MultiSelectCustomProps = {
  options: (string | SelectItem)[];
  size?: MantineSize;
  placeholder?: string;
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  limit?: number;
  maxDropdownHeight?: number;
  icon?: ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onDropdownOpen?: () => void;
};

/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize, AutocompleteItem } from '@mantine/core';
import { ReactNode } from 'react';

export type AutocompleteCustomProps = {
  data: (string | AutocompleteItem)[];
  size?: MantineSize;
  placeholder?: string;
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  limit?: number;
  maxDropdownHeight?: number;
  icon?: ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  onDropdownOpen?: () => void;
};

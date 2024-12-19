/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { ComboboxStringData, MantineSize } from '@mantine/core';
import { ReactNode } from 'react';

export type AutocompleteCustomProps = {
  data: ComboboxStringData;
  size?: MantineSize;
  placeholder?: string;
  limit?: number;
  maxDropdownHeight?: number;
  leftSection?: ReactNode;
  rightSection?:ReactNode;
  onDropdownOpen?: () => void;
};

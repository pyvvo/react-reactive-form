/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { ComboboxData, MantineSize } from '@mantine/core';

export type SelectCustomProps = {
  data: ComboboxData;
  size?: MantineSize;
  onDropdownOpen?: () => void;
};

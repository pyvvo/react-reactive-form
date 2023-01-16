/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';
import { FC } from 'react';

export type PasswordFieldCustomProps = {
  /** Adds icon on the left side of input */
  icon?: React.ReactNode;
  visibilityToggleIcon?: FC<{
    reveal: boolean;
    size: number;
  }>;
  size?: MantineSize;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

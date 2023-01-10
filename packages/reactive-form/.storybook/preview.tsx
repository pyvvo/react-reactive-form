import { MantineProvider } from '@mantine/core';
import theme from '../src/theme';
import React, { FC } from 'react';

// console.log('themeee');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const ThemeWrapper: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
};

const MantineDecorator = (Story: Function) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const decorators = [MantineDecorator];

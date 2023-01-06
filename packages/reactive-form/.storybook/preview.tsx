import { MantineProvider } from '@mantine/core';
import React from 'react';

console.log('themeee');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Story />
    </MantineProvider>
  )
];

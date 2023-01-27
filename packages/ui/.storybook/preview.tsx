import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core';
import theme from '../src/theme';
import React, { FC, useState } from 'react';

// console.log('themeee');

const customViewports = {
  xs: {
    name: 'xs',
    styles: {
      width: '576px',
      height: '800px'
    }
  },
  sm: {
    name: 'sm',
    styles: {
      width: '768px',
      height: '801px'
    }
  },
  md: {
    name: 'md',
    styles: {
      width: '992px',
      height: '801px'
    }
  },
  lg: {
    name: 'lg',
    styles: {
      width: '1200px',
      height: '801px'
    }
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1400px',
      height: '801px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: { viewports: customViewports }
};

const ThemeWrapper: FC<{ children: React.ReactNode }> = (props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS>
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

const MantineDecorator = (Story: Function) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const decorators = [MantineDecorator];

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core';
import { IThemeContext, PyvvoThemeProvider } from '../src/theme';
import theme from '../src/mantine.theme';
import React, { FC, useState } from 'react';
import '../src/theme.css'

import { cva, type VariantProps, } from 'class-variance-authority';

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
const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-green-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600'
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100'
      ]
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});


const pyTheme: any = {
  button: button

}

const PyvvoThemeWrapper: FC<{ children: React.ReactNode }> = (props) => {

  return (

    <PyvvoThemeProvider theme={{ ...pyTheme }}>
      {props.children}
    </PyvvoThemeProvider>

  );
};

const PyvvoDecorator = (Story: Function) => (
  <PyvvoThemeWrapper>
    <Story />
  </PyvvoThemeWrapper>
);

const MantineDecorator = (Story: Function) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const decorators = [MantineDecorator, PyvvoDecorator];

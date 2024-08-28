import '@mantine/core/styles.css';
import '../src/theme.css';
import '@mantine/spotlight/styles.css';
import {
  // ColorScheme,
  // ColorSchemeProvider,
  MantineProvider
} from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import { IThemeContext, PyvvoThemeProvider } from '../src/theme';
import theme from '../src/mantine.theme';
import React, { FC, useState } from 'react';
import { AuthGuard, AuthProvider, IKeycloakProviderProps } from '../src/auth';

import { cva, type VariantProps } from 'class-variance-authority';
import Keycloak from 'keycloak-js';

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
  // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    // <ColorSchemeProvider
    //   colorScheme={colorScheme}
    //   toggleColorScheme={toggleColorScheme}>
    <MantineProvider
      theme={{ ...theme }}
      stylesTransform={emotionTransform}
      // theme={{ ...theme, colorScheme }}
      // withGlobalStyles
      // withNormalizeCSS
    >
      <MantineEmotionProvider> {props.children} </MantineEmotionProvider>
    </MantineProvider>
  );
};

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-green-500',
        'text-white',
        'border-transparent',
        'hover:bg-red-600'
      ],
      secondary: [
        'bg-red-500',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100'
      ]
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-xl', 'py-5', 'px-5']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

const pyTheme: any = {
  button: button
};

const PyvvoThemeWrapper: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <PyvvoThemeProvider theme={pyTheme}>{props.children}</PyvvoThemeProvider>
  );
};

const PyvvoDecorator = (Story: Function) => (
  <PyvvoThemeWrapper>
    <Story />
  </PyvvoThemeWrapper>
);

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'pyvvo',
  clientId: 'pichaa'
});

const KeycloakWrapper: FC<{ children: React.ReactNode }> = (props) => {
  const keycloakConfig: IKeycloakProviderProps = {
    keycloak,
    onLoad: 'check-sso'
  };
  console.log('ici');

  return <AuthProvider {...keycloakConfig}>{props.children}</AuthProvider>;
};

const KeycloakDecorator = (Story: Function) => (
  <KeycloakWrapper>
    {/* <AuthGuard> */}
    <Story />
    {/* </AuthGuard> */}
  </KeycloakWrapper>
);

const MantineDecorator = (Story: Function) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const decorators = [MantineDecorator, PyvvoDecorator];

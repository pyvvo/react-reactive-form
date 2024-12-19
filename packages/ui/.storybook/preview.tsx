import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
// import 'react-data-grid/lib/styles.css';
import '../src/theme.css';
import { MantineProvider } from '@mantine/core';
import { StoryFn } from '@storybook/react';
import React, { FC } from 'react';
import { AuthProvider, IKeycloakProviderProps } from '../src/auth';
import theme, { cssVarResolver } from '../src/mantine.theme';
import { HMThemeProvider } from '../src/theme';

import { cva } from 'class-variance-authority';
// import Keycloak from 'keycloak-js';

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
  return (
    <MantineProvider theme={{ ...theme }} cssVariablesResolver={cssVarResolver}>
      {props.children}
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

const HmTheme: any = {
  button: button
};

const HMThemeWrapper: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <HMThemeProvider theme={HmTheme}>{props.children}</HMThemeProvider>
  );
};

const PyvvoDecorator = (Story: StoryFn) => (
  <HMThemeWrapper>
    <Story />
  </HMThemeWrapper>
);

// const keycloak = new Keycloak({
//   url: 'http://localhost:8080',
//   realm: 'pyvvo',
//   clientId: 'pichaa'
// });

// const KeycloakWrapper: FC<{ children: React.ReactNode }> = (props) => {
//   const keycloakConfig: IKeycloakProviderProps = {
//     keycloak,
//     onLoad: 'check-sso'
//   };

//   return <AuthProvider {...keycloakConfig}>{props.children}</AuthProvider>;
// };

// const KeycloakDecorator = (Story: StoryFn) => (
//   <KeycloakWrapper>
//     {/* <AuthGuard> */}
//     <Story />
//     {/* </AuthGuard> */}
//   </KeycloakWrapper>
// );

const MantineDecorator = (Story: StoryFn) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

export const decorators = [MantineDecorator, PyvvoDecorator];

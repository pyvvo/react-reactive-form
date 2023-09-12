import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core';
import { IThemeContext, PyvvoThemeProvider } from '../src/theme';
import theme from '../src/mantine.theme';
import React, { FC, useState } from 'react';
import '../src/theme.css';
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

const pyButton = cva('', {
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

const pyTitleVariant = cva('', {
  variants: {
    // color: {
    //   red: 'text-red-500',
    //   lime: 'text-lime-500',
    //   orange: 'text-orange-500',
    //   gray: 'text-gray-500',
    //   black: 'text-black'
    // },
    level: {
      h1: 'text-6xl font-bold',
      h2: 'text-5xl font-bold',
      h3: 'text-4xl font-bold',
      h4: 'text-2xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold'
    },
    align: {
      left: 'text-left',
      right: 'text-right',
      justify: 'text-justify',
      center: 'text-center'
    }
  },
  defaultVariants: {
    level: 'h1',
    // color: 'black'
  }
});

const pyText = cva('', {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl']
    },
    ff: {
      sans: ['font-sans'],
      serif: ['font-serif'],
      mono: ['font-mono']
    },
    fs: {
      italic: ['italic'],
      normal: ['not-italic']
    },
    fw: {
      black: ['font-black'],
      extrabold: ['font-extrabold'],
      bold: ['font-bold'],
      semibold: ['font-semibold'],
      medium: ['font-medium'],
      normal: ['font-normal'],
      light: ['font-light'],
      extralight: ['font-extralight'],
      thin: ['font-thin']
    },
    align: {
      end: ['text-end'],
      start: ['text-start'],
      justify: ['text-justify'],
      right: ['text-right'],
      center: ['text-center'],
      left: ['text-left']
    },
    line:{
      overline:['overline'],
      underline:['underline'],
      through:['line-through'],
      noline:['no-underline']
    },
    tt:{
      normal:['normal-case'],
      uppercase:['uppercase'],
      lowercase:['lowercase'],
      capitalize:['capitalize']
    }
  }
});

const pyTheme: any = {
  button: pyButton,
  title: pyTitleVariant,
  text: pyText
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
  clientId: 'pichaa',
});

const KeycloakWrapper: FC<{ children: React.ReactNode }> = (props) => {
  const keycloakConfig: IKeycloakProviderProps = {
    keycloak,
    onLoad: 'check-sso'
  };
  console.log("ici");

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

export const decorators = [MantineDecorator, PyvvoDecorator, KeycloakDecorator];

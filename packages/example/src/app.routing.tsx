import { AppLayout } from '@hm/ui';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import {
  IconHome2,
  IconCloudComputing,
  IconAffiliate,
  IconShieldHalfFilled,
  IconDots,
  IconSettings
} from '@tabler/icons';
import { FC, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import CollectorModule from './collector/collector.module.';

const modules = [
  {
    icon: IconHome2,
    label: 'Dashboard',
    color: 'indigo',
    isBottom: false,
    to: '/dashboard'
  },
  {
    icon: IconCloudComputing,
    label: 'Collector',
    color: 'indigo',
    to: '/collector'
  },
  {
    icon: IconAffiliate,
    label: 'Dispatcher',
    color: 'grape',
    to: '/dispatcher'
  },
  {
    icon: IconShieldHalfFilled,
    label: 'IAM',
    to: '/iam'
  },
  {
    icon: IconDots,
    label: 'More',
    to: '/'
  },
  {
    icon: IconSettings,
    label: 'Settings',
    isBottom: true,
    to: '/settings'
  }
];

const AppRouting: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const route = useRoutes([
    {
      path: '/',
      // eslint-disable-next-line react/jsx-no-undef
      element: <AppLayout modules={modules} />,
      children: [
        {
          path: 'dashboard',
          element: (
            <main style={{ padding: '1rem' }}>
              <p>Dashboard!</p>
            </main>
          )
        },
        {
          path: 'collector/*',
          element: <CollectorModule />
        },

        {
          path: 'dispatcher',
          element: (
            <main style={{ padding: '1rem' }}>
              <p>Dispatcher!</p>
            </main>
          )
        },
        {
          path: 'iam',
          element: (
            <main style={{ padding: '1rem' }}>
              <p>Iam!</p>
            </main>
          )
        },
        {
          path: 'settings',
          element: (
            <main style={{ padding: '1rem' }}>
              <p>Settings!</p>
            </main>
          )
        },
        {
          path: '/'
        }
      ]
    }
  ]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      {route}
    </ColorSchemeProvider>
  );
};

export default AppRouting;

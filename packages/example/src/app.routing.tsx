import { AppLayout } from '@hm/ui';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import {
  IconHome2,
  IconCloudComputing,
  IconAffiliate,
  IconShieldHalfFilled,
  IconDots,
  IconSettings,
  IconDashboard,
  IconFileText,
  IconHome
} from '@tabler/icons';
import { FC, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Chance from 'chance';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import CollectorModule from './collector/collector.module';
import DashboardModule from './dashboard/dashboard.module';

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

const chance = new Chance();
const avatarUrl = chance.avatar({
  protocol: 'https',
  email: 'mail@victorquinn.com'
});

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size={18} />
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size={18} />
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size={18} />
  }
];
const AppRouting: FC = () => {
  const route = useRoutes([
    {
      path: '/',
      // eslint-disable-next-line react/jsx-no-undef
      element: (
        <SpotlightProvider actions={actions}>
          <AppLayout offset={60} imageSrc={avatarUrl} modules={modules} />
        </SpotlightProvider>
      ),
      children: [
        {
          path: 'dashboard',
          element: <DashboardModule />
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
  return route;
};

export default AppRouting;

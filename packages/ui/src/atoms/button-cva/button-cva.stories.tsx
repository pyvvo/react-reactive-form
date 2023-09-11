/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { AuthGuard } from '@/auth';
import useKeycloak from '@/auth/auth.hooks';
import { FC, useState } from 'react';

type Story = StoryObj<typeof Button>;

const GuardComponent: FC<{setIsAuthenticated:Function}> = ({setIsAuthenticated}) => {
  const keycloak = useKeycloak();
  const login = async () => {
    await keycloak.login();
    const {authenticated}= keycloak;
    setIsAuthenticated(authenticated ?? false)
  };

  return (
    <button
      style={{
        backgroundColor: 'blueviolet',
        color: 'white',
        padding: '1em',
        borderRadius: '0.5em'
      }}
      onClick={login}>
      Log in
    </button>
  );
};

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => {
      const keycloak = useKeycloak();
      const [isAuthenticated, setIsAuthenticated] = useState(false)
      const logout = () => {
        keycloak.logout();
      };

      return (
        <AuthGuard fallback={<GuardComponent setIsAuthenticated={setIsAuthenticated} />}>
          <button
            style={{
              backgroundColor: 'blueviolet',
              color: 'white',
              padding: '1em',
              borderRadius: '0.5em'
            }}
            onClick={logout}>
            Log out
          </button>
          {isAuthenticated}
          <Story />
        </AuthGuard>
      );
    }
  ],
  argTypes: {
    intent: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  }
};

export default meta;

export const Buttono: Story = {
  args: {
    // intent: 'primary'
    // size: 'large'
    className: 'hover:bg-blue-200'
  }
};

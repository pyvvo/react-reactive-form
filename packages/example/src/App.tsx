/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import NiceModal from '@ebay/nice-modal-react';
import { theme } from '@hm/ui';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useState } from 'react';
// import './App.css';
import AppRouting from './app.routing';
import './register-reactive-fields';

const defaultValues = {
  username: '',
  password: '',
  isActive: true
};

type Data = typeof defaultValues;

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ ...theme, colorScheme }}>
        <NotificationsProvider>
          <NiceModal.Provider>
            <AppRouting />
          </NiceModal.Provider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

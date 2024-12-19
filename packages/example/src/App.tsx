/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NiceModal from '@ebay/nice-modal-react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import AppRouting from './app.routing';
import './register-reactive-fields';
import theme, { cssVarResolver } from './theme';

// const client = new ApolloClient({
//   uri: 'https://flyby-gateway.herokuapp.com/',
//   cache: new InMemoryCache()
// });

function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVarResolver}>
      <Notifications />
      <NiceModal.Provider>
        {/* <ApolloProvider client={client}> */}
        <AppRouting />
        {/* </ApolloProvider> */}
      </NiceModal.Provider>
    </MantineProvider>
  );
}

export default App;

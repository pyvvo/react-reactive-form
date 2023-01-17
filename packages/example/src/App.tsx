/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import { IReactiveFieldMeta, theme } from '@hm/ui';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import NiceModal from '@ebay/nice-modal-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import './App.css';
import './register-reactive-fields';
import AppRouting from './app.routing';

const defaultValues = {
  username: '',
  password: '',
  isActive: true
};

type Data = typeof defaultValues;

function App() {
  /*   const [count, setCount] = useState(0);
  const form = useForm<Data>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const onSubmit = (submitedData: Data) => {
    console.log(submitedData);
  };

  console.log('ici');

  type TT = IReactiveFieldMeta<Data>['fields'];

  const meta: IReactiveFieldMeta<Data>[] = [
    {
      name: 'fddffd',
      fields: [
        {
          fieldKey: 'username',
          label: 'username',
          type: 'text',
          options: {
            required: true
          }
        },
        {
          fieldKey: 'password',
          label: 'password',
          type: 'text'
          // customProps: {
          //   label: 'ff'
          // }
        },
        {
          fieldKey: 'isActive',
          label: 'password',
          type: 'switch'
        }
      ]
    }
  ]; */

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <NotificationsProvider>
        <NiceModal.Provider>
          <AppRouting />
        </NiceModal.Provider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;

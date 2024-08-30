/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { HMDrawer, IReactiveFieldMeta, ReactiveForm } from '@humaapi/ui';
import { Box, Button } from '@mantine/core';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Store from './store.service';

type Data = ReturnType<typeof Store.getRows>[0];

const Collector: FC = () => {
  const form = useForm<Data>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });
  console.log('ici');

  const onSubmit = (submitedData: Data) => {
    console.log(submitedData);
  };

  const meta: IReactiveFieldMeta<Data>[] = [
    {
      name: 'fddffd',
      fields: [
        {
          fieldKey: 'email',
          label: 'Email',
          type: 'text',
          options: {
            required: true
          }
        },
        {
          fieldKey: 'password',
          label: 'Password',
          type: 'password'
          // customProps: {
          //   label: 'ff'
          // }
        },
        {
          fieldKey: 'operator',
          label: 'Operator',
          type: 'text'
        },
        {
          fieldKey: 'subscriber',
          label: 'Subscriber',
          type: 'text'
        }
      ]
    }
  ];

  return (
    <HMDrawer>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box>
          <Button type="submit">Edit</Button>
        </Box>
        <ReactiveForm form={form} meta={meta} />
      </form>
    </HMDrawer>
  );
};

export default Collector;

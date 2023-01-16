/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import { FC, useEffect } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { IDecoratorParams } from './common';

export const ReactRouterLoggerDecorator = (
  Story: IDecoratorParams['Story']
) => {
  const location = useLocation();
  useEffect(() => {
    action('location')(location);
  }, [location]);

  return <Story />;
};

// https://divotion.com/blog/typescript-react-router-v6-inside-storybook-stories
export const ReactRouterDecorator = (
  Story: IDecoratorParams['Story'],
  props: IDecoratorParams['props']
) => {
  const { args } = props;
  // console.log({ props });

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

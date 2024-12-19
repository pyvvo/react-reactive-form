/* eslint-disable import/prefer-default-export */
import { within } from '@storybook/test';
import { BoundFunctions, Queries } from '@testing-library/dom';

export const getReactiveRef = (
  canvasElement: HTMLElement,
  fieldKey: string
) => {
  const canvas = within(canvasElement);
  const fieldRef = canvas.getByTestId(fieldKey);
  const submitRef = canvas.getByTestId('submit');
  const resultRef = canvas.getByTestId<HTMLTextAreaElement>('form-result');
  return { fieldRef, submitRef, resultRef };
};

/* eslint-disable import/prefer-default-export */
import { ReactiveFieldErrorType } from '@/reactive-form/reactive-fields/types';
import { getValuePath } from '@/utils';

export const getError = (fieldKey: string, errors: ReactiveFieldErrorType) => {
  const paths = fieldKey ? fieldKey.split('.') : [];

  const hasErrors = errors ? getValuePath(paths, errors) : undefined;

  return hasErrors;
};

export const getMantineError = (error: ReactiveFieldErrorType| undefined) => {
  const err = error && error.message ? (error.message as string) : Boolean(error);  
  return err;
};

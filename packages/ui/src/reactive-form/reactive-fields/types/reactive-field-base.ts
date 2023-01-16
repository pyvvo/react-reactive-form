/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, Ref } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { JSONData, Merge, Simplify } from '@/types';
import { FormProps } from '../../../types/form';

export type InputType =
  | 'text'
  | 'number'
  | 'password'
  | 'checkbox'
  | 'switch'
  | 'select'
  | 'radio';
// | 'range'
// | 'multi-select'
// // | 'list'
// | 'datepicker'
// | 'autocomplete';

export type FormFieldOption<TFieldValues extends JSONData> =
  RegisterOptions<TFieldValues>;

export type ErrorFormType = {
  type: string;
  message?: string;
  ref: Ref<HTMLElement>;
};

export type ReactiveFieldErrorType = ErrorFormType | Record<string, any>;

export type ReactiveFieldProps<TFieldProps extends JSONData> = Simplify<
  { 'data-testid': string } & TFieldProps
>;

export interface IReactiveField<
  TFieldProps extends JSONData,
  TFormValues extends JSONData = JSONData
> {
  /** Key is used for register, input id and array map key */
  fieldKey: string;
  /** label is used for the input displayed name */
  label: string;
  /** react-hook-form register's options  */
  options?: FormFieldOption<TFormValues>;

  form: FormProps<TFormValues>;

  customProps: CommonProps<TFieldProps, TFormValues>;

  error?: ReactiveFieldErrorType;
}

export type ReactiveFieldStoryType<
  TFieldProps extends JSONData,
  TFormValues extends JSONData = JSONData
> = Omit<IReactiveField<TFieldProps, TFormValues>, 'error' | 'form'>;

export type CommonProps<
  // T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  TFieldProps extends JSONData,
  TFormValues extends JSONData = JSONData
> = {
  disabled?: boolean;
  hidden?: boolean;
  handleChange?: (params: {
    form: FormProps<TFormValues>;
    event: ChangeEvent<TFieldProps> | any;
  }) => void;
} & TFieldProps;

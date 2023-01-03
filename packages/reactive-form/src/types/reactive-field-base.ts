import { ChangeEvent } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { FormProps } from './form';

export type InputType =
  | 'text'
  | 'password'
  | 'range'
  | 'switch'
  | 'select'
  | 'multiSelect'
  | 'radio'
  | 'checkbox'
  | 'list';

export type FormFieldOption<TValues extends Record<string, any>> =
  RegisterOptions<TValues>;

export interface IReactiveField<
  TField extends Record<string, any>,
  TValues extends Record<string, any> = Record<string, any>
> {
  /** Key is used for register, input id and array map key */
  key: string;
  /** label is used for the input displayed name */
  label: string;
  /** react-hook-form register's options  */
  options?: FormFieldOption<TValues>;

  form: FormProps<TValues>;

  customProps: CommonProps<TField, TValues>;
}

export interface IReactiveFieldMeta<
  TField extends Record<string, any>,
  TValues extends Record<string, any> = Record<string, any>
> extends Omit<IReactiveField<TField, TValues>, 'form'> {
  type: InputType;
}

export type CommonProps<
  // T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  TField extends Record<string, any>,
  TValues extends Record<string, any> = Record<string, any>
> = {
  disabled?: boolean;
  hidden?: boolean;
  handleChange?: (params: {
    form: FormProps<TValues>;
    event: ChangeEvent<TField> | any;
  }) => void;
} & TField;

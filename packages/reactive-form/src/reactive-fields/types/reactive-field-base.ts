import { ChangeEvent } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { JSONData, NestedKeyOf } from '@/types';
import { FormProps } from '../../types/form';

export type InputType = 'text' | 'password';
// | 'range'
// | 'switch'
// | 'select'
// | 'multi-select'
// | 'radio'
// | 'checkbox'
// // | 'list'
// | 'datepicker'
// | 'autocomplete';

export type FormFieldOption<TFieldValues extends JSONData> =
  RegisterOptions<TFieldValues>;

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
}

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

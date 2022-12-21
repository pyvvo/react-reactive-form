import { RegisterOptions } from 'react-hook-form';
import { FormProps } from './form';

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

  customProps: TField;
}

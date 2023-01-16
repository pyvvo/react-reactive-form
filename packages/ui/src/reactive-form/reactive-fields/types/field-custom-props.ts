import { JSONData } from '@/types';
import { CheckCustomProps } from '../reactive-checkbox';
import { NumberFieldCustomProps } from '../reactive-number-field';
import { PasswordFieldCustomProps } from '../reactive-password-field';
import { RadioCustomProps } from '../reactive-radio';
import { SelectCustomProps } from '../reactive-select';
import { SwitchCustomProps } from '../reactive-switch';
import { TextFieldCustomProps } from '../reactive-text-field';
import { CommonProps, InputType } from './reactive-field-base';

export type CustomPropsType = Record<InputType, any>;

export interface ICustomProps<TFormValues extends JSONData> {
  text: CommonProps<TextFieldCustomProps, TFormValues>;
  password: CommonProps<PasswordFieldCustomProps, TFormValues>;
  number: CommonProps<NumberFieldCustomProps, TFormValues>;
  checkbox: CommonProps<CheckCustomProps, TFormValues>;
  switch: CommonProps<SwitchCustomProps, TFormValues>;
  select: CommonProps<SelectCustomProps, TFormValues>;
  radio: CommonProps<RadioCustomProps, TFormValues>;

  // range: never;
  // 'multi-select': never;
  // checkbox: never;
  // list: never;
  // datepicker: never;
  // autocomplete: never;
}

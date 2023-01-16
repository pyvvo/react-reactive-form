import { JSONData } from '@/types';
import { CheckCustomProps } from '../reactive-checkbox';
import { SelectCustomProps } from '../reactive-select';
import { SwitchCustomProps } from '../reactive-switch';
import { TextFieldCustomProps } from '../reactive-text-field';
import { CommonProps, InputType } from './reactive-field-base';

export type CustomPropsType = Record<InputType, any>;

export interface ICustomProps<TFormValues extends JSONData> {
  text: CommonProps<TextFieldCustomProps, TFormValues>;
  checkbox: CommonProps<CheckCustomProps, TFormValues>;
  switch: CommonProps<SwitchCustomProps, TFormValues>;
  select: CommonProps<SelectCustomProps, TFormValues>;

  // range: never;
  // switch: never;
  // select: never;
  // 'multi-select': never;
  // radio: never;
  // checkbox: never;
  // list: never;
  // datepicker: never;
  // autocomplete: never;
}

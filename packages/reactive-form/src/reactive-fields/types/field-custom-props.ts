import { JSONData } from '@types';
import { TextFieldCustomProps } from '../reactive-text-field';
import { CommonProps, InputType } from './reactive-field-base';

export type CustomPropsType = Record<InputType, any>;

export interface ICustomProps<TFormValues extends JSONData>
  extends CustomPropsType {
  text: CommonProps<TextFieldCustomProps, TFormValues>;
  password: TextFieldCustomProps;
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

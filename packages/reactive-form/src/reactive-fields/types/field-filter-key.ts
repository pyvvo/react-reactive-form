import { DeepOmitVariableKind, JSONData, Primitive } from '@/types';
import { CustomPropsType } from './field-custom-props';

export interface IFilterKeys<TFormValues extends JSONData>
  extends CustomPropsType {
  text: DeepOmitVariableKind<TFormValues, boolean | any[]>;
  password: DeepOmitVariableKind<TFormValues, boolean | any[]>;
  range: DeepOmitVariableKind<TFormValues, boolean | any[] | string>;
  switch: DeepOmitVariableKind<TFormValues, number | any[] | string>;
  select: DeepOmitVariableKind<TFormValues, boolean | any[]>;
  'multi-select': DeepOmitVariableKind<
    TFormValues,
    boolean | number | string | Record<string, any>[]
  >;
  radio: DeepOmitVariableKind<TFormValues, boolean | any[]>;
  checkbox: DeepOmitVariableKind<TFormValues, number | any[] | string>;
  list: DeepOmitVariableKind<
    TFormValues,
    boolean | Primitive[] | string | number
  >;
  datepicker: DeepOmitVariableKind<TFormValues, boolean | any[]>;
  autocomplete: DeepOmitVariableKind<
    TFormValues,
    boolean | number | string | Record<string, any>[]
  >;
}

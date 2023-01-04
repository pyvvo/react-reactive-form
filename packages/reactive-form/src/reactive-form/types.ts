import { InputType, IReactiveField } from '@/reactive-fields/types';
import { DeepOmitVariableKind, NestedKeyOf } from '@/types';

type DataType = Record<string, any>;

type PatialReactiveField<
  TField extends Record<string, any>,
  TValues extends Record<string, any> = Record<string, any>
> = Omit<IReactiveField<TField, TValues>, 'form' | 'fieldKey'>;

type FilterKeyByCustomInputType<
  T extends DataType,
  U extends CustomInputType
> = U extends 'switch' | 'checkbox'
  ? DeepOmitVariableKind<T, number | any[] | string>
  : U extends 'text' | 'select' | 'radio' | 'password' | 'datepicker'
  ? DeepOmitVariableKind<T, boolean | any[]>
  : U extends 'multiSelect'
  ? DeepOmitVariableKind<T, boolean | number | string | Record<string, any>[]>
  : U extends 'range'
  ? DeepOmitVariableKind<T, boolean | any[] | string>
  : U extends 'list'
  ? DeepOmitVariableKind<T, boolean | Primitive[] | string | number>
  : never;

type InputKeyType<T extends DataType, U extends CustomInputType> = NestedKeyOf<
  FilterKeyByCustomInputType<T, U>
>;

export interface IReactiveFieldMeta<
  TField extends DataType,
  TValues extends Record<string, any> = Record<string, any>
> extends PatialReactiveField<TField, TValues> {
  fieldKey: InputKeyType<TField, U>;
  type: InputType;
}

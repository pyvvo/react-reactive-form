/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, ReactNode } from 'react';
import { JSONData, NestedKeyOf } from '@/types';
import {
  FormFieldOption,
  IConditionalProp,
  IFilterKeys,
  InputType,
  IReactiveField
} from '@/reactive-fields/types';

type PartialOption<TFormValues extends JSONData> = Omit<
  FormFieldOption<TFormValues>,
  'onChange' | 'onBlur'
>;

type InputKeyType<
  TFormValues extends JSONData,
  TInputType extends InputType
> = NestedKeyOf<TFormValues>;
// > = NestedKeyOf<IFilterKeys<TFormValues>[TInputType]>;

type Data = {
  username: string;
  password: string;
  // isActive: boolean;
};

/* type TTT = InputKeyType<Data, 'text'>;

type TT = IPatialReactiveField<Data, 'text'>['fieldKey'];

type TTTT = FieldMeta<Data, 'checkbox'>['fieldKey'];

const meta: IReactiveFieldMeta<Data> = {
  fields: [
    {
      type: 'switch',
      fieldKey: 'password',
      label: 'fdf'
    }
  ]
}; */

interface IPatialReactiveField<
  TFormValues extends JSONData,
  TInputType extends InputType
> extends Omit<
    IReactiveField<any, TFormValues>,
    'form' | 'options' | 'customProps' | 'fieldKey' | 'error'
  > {
  fieldKey: InputKeyType<TFormValues, TInputType>;
  options?: PartialOption<TFormValues>;
  type: TInputType;
}

export type FieldMeta<
  TFormValues extends JSONData,
  TInputType extends InputType
> = IConditionalProp<TFormValues>[TInputType] &
  IPatialReactiveField<TFormValues, TInputType>;

export interface IReactiveFieldMeta<TFormValues extends JSONData> {
  name?: string;
  fields: ReturnType<
    <TInputType extends InputType>(
      params: FieldMeta<TFormValues, TInputType>[]
    ) => typeof params
  >;
  // fieldKey: InputKeyType<TField, U>;
  // type: InputType;
}

// #############################
// #############################
// #############################
// ############### form group type

export type FormGroupComponentType = ReactElement<{
  title: string;
  children: ReactNode;
}>;

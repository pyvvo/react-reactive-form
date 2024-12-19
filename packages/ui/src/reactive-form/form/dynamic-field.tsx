/* eslint-disable @typescript-eslint/no-shadow */
import {
  getError,
  InputType,
  ReactiveFieldErrorType
} from '@/reactive-form/reactive-fields';
import { useCallback, useMemo } from 'react';
import { FormProps, JSONData } from '../../types';
import FormBuilder from '../form-builder';
import { FieldMeta } from './types';

interface IDynamicField<TFormValues extends JSONData> {
  field: FieldMeta<TFormValues, InputType>;
  form: FormProps<TFormValues>;
  errors: ReactiveFieldErrorType;
}

 const DynamicField = <TFormValues extends JSONData>(
  props: IDynamicField<TFormValues>
) => {
  const { field, form, errors } = props;
  const MemoizedRenderField = useCallback(() => {
    const RenderField = FormBuilder.getField<JSONData, TFormValues>(field.type);
    return RenderField;
  }, [field.type, field.fieldKey])();
  const { type, customProps, options, ...fieldProps } = field;  
  const error = getError(field.fieldKey, errors);
  

  return useMemo(
    () => (
      <MemoizedRenderField
        {...fieldProps}
        options={options as never}
        form={form}
        customProps={customProps as never}
        error={error}
      />
    ),

    [
      MemoizedRenderField,
      options,
      fieldProps.fieldKey,
      fieldProps.label,
      form,
      customProps,
      error
    ]
  );
};


export default DynamicField;

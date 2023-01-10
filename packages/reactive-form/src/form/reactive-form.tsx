/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback, useMemo } from 'react';
import LayoutFlex from '@/form-layout/layout-flex';
import { InputType, ReactiveFieldErrorType } from '@/reactive-fields/types';
import { getError } from '@/reactive-fields/utils';
import FormBuilder from '../form-builder';
import { FormProps, JSONData } from '../types';
import FormGroup from './form-group';
import { FieldMeta, IReactiveFieldMeta } from './types';

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
  }, [field.type])();
  const { type, customProps, ...fieldProps } = field;
  const error = getError(field.fieldKey, errors);

  return useMemo(
    () => (
      <MemoizedRenderField
        {...fieldProps}
        form={form}
        customProps={customProps as never}
        error={error}
      />
    ),

    [MemoizedRenderField, fieldProps, form, customProps, error]
  );
};

export interface IReactiveForm<TFormValues extends JSONData> {
  meta: IReactiveFieldMeta<TFormValues>[];
  form: FormProps<TFormValues>;
  // currentBreakpoint?: string;
}

const ReactiveForm = <TFormValues extends JSONData>(
  props: IReactiveForm<TFormValues>
) => {
  const { meta, form } = props;

  const {
    formState: { errors }
  } = form;

  return useMemo(
    () => (
      <>
        {meta.map(({ name, fields }) => (
          <FormGroup key={name} name={name} component={<LayoutFlex />}>
            {fields.map((field) => (
              <DynamicField
                key={field.fieldKey}
                field={field}
                form={form}
                errors={errors}
              />
            ))}
          </FormGroup>
        ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [meta, JSON.stringify(errors)]
  );
};

export default ReactiveForm;

import { useMemo } from 'react';
import LayoutFlex from '@/form-layout/layout-flex';
import FormBuilder from '../form-builder';
import { FormProps, JSONData } from '../types';
import FormGroup from './form-group';
import { IReactiveFieldMeta } from './types';

interface IReactiveForm<TFormValues extends JSONData> {
  meta: IReactiveFieldMeta<TFormValues>[];
  form: FormProps<TFormValues>;
  currentBreakpoint?: string;
}

const ReactiveForm = <TFormValues extends JSONData>(
  props: IReactiveForm<TFormValues>
) => {
  const { meta, form, currentBreakpoint } = props;
  const {
    formState: { errors }
  } = form;
  return useMemo(
    () => (
      <>
        {meta.map(({ name, fields }) => (
          <FormGroup key={name} name={name} component={<LayoutFlex />}>
            {fields.map((field) => {
              const ReactiveField = FormBuilder.getField<JSONData, TFormValues>(
                field.type
              );
              const { type, customProps, ...fieldProps } = field;
              return (
                <ReactiveField
                  key={field.fieldKey}
                  {...fieldProps}
                  form={form}
                  customProps={customProps as never}
                />
              );
            })}
          </FormGroup>
        ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [meta, errors, currentBreakpoint]
  );
};

export default ReactiveForm;

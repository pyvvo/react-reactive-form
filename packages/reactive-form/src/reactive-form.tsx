import FormBuilder from './form-builder';
import { FormProps, IReactiveFieldMeta } from './types';

interface IReactiveForm<
  TField extends Record<string, any>,
  TValues extends Record<string, any>
> {
  meta: IReactiveFieldMeta<TField, TValues>[];
  form: FormProps<TValues>;
}

const ReactiveForm = <
  TField extends Record<string, any>,
  TValues extends Record<string, any>
>(
  props: IReactiveForm<TField, TValues>
) => {
  const { meta, form } = props;

  return (
    <>
      {meta.map((field) => {
        const ReactiveField = FormBuilder.getField<TField, TValues>(field.type);
        const { type, ...fieldProps } = field;
        return <ReactiveField {...fieldProps} form={form} />;
      })}
    </>
  );
};

export default ReactiveForm;

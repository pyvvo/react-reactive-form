import HmTable from '@/molecules/table';
import { IHMColumn, IRowAction } from '@/molecules/table/types';
import DynamicField from '@/reactive-form/form/dynamic-field';
import { JSONData, NestedKeyOf } from '@/types';
import { ActionIcon } from '@mantine/core';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { FieldArray, useFieldArray } from 'react-hook-form';
import { IReactiveField, ReactiveFieldErrorType } from '../types';
import { errorsArrayToObject } from '../utils/field-error-interceptor';
import { ListFieldCustomProps } from './types';

const ReactiveListField = <TFormValues extends JSONData>(
  props: IReactiveField<ListFieldCustomProps<TFormValues>, TFormValues>
) => {
  const { form, fieldKey, label, options, error, customProps } = props;
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldKey as never
  });
  const [defaultValues] = useState<FieldArray<TFormValues>>(fields[0]);

  const handleAppend = () => {
    if (!defaultValues) {
      return;
    }

    append(defaultValues);
  };

  const { columns } = customProps;

  const newCollumns = columns.map((col) => {
    const { rowRender, fieldKey: fK, ...field } = col;
    let errors: ReactiveFieldErrorType = {};
    if (error) {
      errors = errorsArrayToObject(error as ReactiveFieldErrorType[]);
    }
    // delete the nested field label
    field.label = '';
    col.rowRender = (val, idx, id) => {
      const nestedFieldKey =
        `${fieldKey}.${idx}.${fK}` as NestedKeyOf<TFormValues>;
      return (
        <DynamicField
          key={id}
          field={{ fieldKey: nestedFieldKey, ...field }}
          form={form}
          errors={errors}
        />
      );
    };
    return {
      key: col.fieldKey,
      label: col.label,
      rowRender: col.rowRender
    } as IHMColumn<TFormValues>;
  });

  const actions: IRowAction<TFormValues>[] = [
    {
      name: 'delete',
      fn: (val, idx) => {
        remove(idx);
      },
      actionRender: ({ name }) => (
        <ActionIcon
          name={name}
          variant="filled"
          aria-label="Delete"
          color="red">
          <IconTrash style={{ width: '70%', height: '70%' }} />
        </ActionIcon>
      )
    }
  ];

  // const customHandleChange = useCallback(
  //   (index: number, value: string) => {
  //     // Handle any custom behavior here if needed
  //     if (customProps?.handleChange) {
  //       customProps.handleChange({ index, value });
  //     }
  //   },
  //   [customProps]
  // );

  return (
    <div>
      <label className="mantine-InputWrapper-label" htmlFor={fieldKey}>
        {' '}
        {label}
      </label>
      <div style={{ marginBottom: 5 }}></div>
      <HmTable
        id={fieldKey}
        columns={newCollumns}
        actions={actions}
        rows={fields as unknown as TFormValues[]}
        withTableBorder
      />
      <ActionIcon
        style={{ marginTop: 10 }}
        name="add"
        variant="filled"
        aria-label="Add"
        onClick={handleAppend}>
        <IconPlus style={{ width: '70%', height: '70%' }} />
      </ActionIcon>
    </div>
  );
};

export default ReactiveListField;

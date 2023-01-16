/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import {
  MultiSelect,
  MultiSelectProps,
  Select,
  SelectProps
} from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField, ReactiveFieldProps } from '../types';
import { MultiSelectCustomProps } from './types';

const ReactiveMultiSelect: FC<IReactiveField<MultiSelectCustomProps>> = (
  props
) => {
  const { form, fieldKey, label, options, error, customProps } = props;

  const {
    size,
    color,
    disabled,
    hidden,
    handleChange,
    onDropdownOpen,
    dropdownPosition,
    icon,
    limit,
    maxDropdownHeight,
    placeholder
  } = customProps;

  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;
  const fieldProps: ReactiveFieldProps<MultiSelectProps> = {
    id: fieldKey,
    'data-testid': fieldKey,
    label,
    // 'aria-describedby': helperId,
    size,
    disabled,
    withAsterisk: !!options?.required,
    sx: {
      width: '100%',
      display: hidden ? 'none' : undefined
    },
    onDropdownOpen,
    color: error ? 'error' : color,
    data: customProps.options,
    searchable: true,
    clearable: true,
    icon,
    placeholder,
    dropdownPosition,
    limit,
    maxDropdownHeight,
    error: Boolean(error)
  };
  const customHandlechange = useCallback(
    (params: HandleChangeParams) => {
      if (handleChange) {
        handleChange({ ...params });
      }
    },
    [handleChange]
  );

  return (
    <Controller
      control={control}
      name={fieldKey}
      // defaultValue={false}
      rules={{ ...options }}
      render={({ field: { onChange, value, ...rest } }) => (
        <MultiSelect
          {...fieldProps}
          onChange={(event) => {
            customHandlechange({ form, event });
            onChange(event);
          }}
          checked={value}
          {...rest}
        />
      )}
    />
  );
};
export default ReactiveMultiSelect;

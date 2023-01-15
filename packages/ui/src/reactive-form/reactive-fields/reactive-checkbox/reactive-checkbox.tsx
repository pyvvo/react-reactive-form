/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import { Checkbox, CheckboxProps } from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField, ReactiveFieldProps } from '../types';
import { CheckCustomProps } from './types';

const ReactiveCheckbox: FC<IReactiveField<CheckCustomProps>> = (props) => {
  const {
    form,
    fieldKey,
    label,
    options,
    error,
    customProps = { color: 'primary' }
  } = props;

  const { size, color, disabled, hidden, handleChange } = customProps;

  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;
  const checkboxProps: ReactiveFieldProps<CheckboxProps> = {
    id: fieldKey,
    'data-testid': fieldKey,
    // 'aria-describedby': helperId,
    size,
    disabled,
    required: !!options?.required,
    sx: {
      width: '100%',
      display: hidden ? 'none' : undefined
    },
    color: error ? 'error' : color,
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
      render={({ field: { onChange, value, ref, name, onBlur } }) => (
        <Checkbox
          {...checkboxProps}
          onChange={(event) => {
            customHandlechange({ form, event });
            onChange(event);
          }}
          checked={value}
          ref={ref}
          name={name}
          onBlur={onBlur}
          label={label}
        />
      )}
    />
  );
};
export default ReactiveCheckbox;

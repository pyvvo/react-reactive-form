/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import { TextInput, TextInputProps } from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField } from '../types';
import { TextFieldCustomProps } from './types';

const ReactiveTextField: FC<IReactiveField<TextFieldCustomProps>> = (props) => {
  const {
    form,
    fieldKey,
    label,
    options,
    customProps = { type: 'text', color: 'primary' }
  } = props;
  const { type, size, color, disabled, hidden, handleChange } = customProps;
  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;
  const fieldProps: TextInputProps = {
    id: fieldKey,
    // 'aria-describedby': helperId,
    size,
    disabled,
    sx: {
      width: '100%',
      display: hidden ? 'none' : undefined
    },
    // color: errors ? 'error' : color,
    type
    // error: Boolean(errors)
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
      defaultValue=""
      rules={{ ...options }}
      render={({ field: { onChange, ref, ...rest } }) => (
        <TextInput
          {...fieldProps}
          onChange={(event) => {
            customHandlechange({ form, event });
            onChange(event);
          }}
          ref={ref}
          {...rest}
          label={label}
        />
      )}
    />
  );
};
export default ReactiveTextField;

/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField, ReactiveFieldProps } from '../types';
import { PasswordFieldCustomProps } from './types';

const ReactivePasswordField: FC<IReactiveField<PasswordFieldCustomProps>> = (
  props
) => {
  const {
    form,
    fieldKey,
    label,
    options,
    error,
    customProps = { color: undefined }
  } = props;

  const {
    size,
    color,
    disabled,
    hidden,
    handleChange,
    visibilityToggleIcon,
    icon
  } = customProps;

  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;
  const fieldProps: ReactiveFieldProps<PasswordInputProps> = {
    id: fieldKey,
    // 'aria-describedby': helperId,
    'data-testid': fieldKey,
    visibilityToggleIcon,
    icon,
    size,
    disabled,
    withAsterisk: !!options?.required,
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
      // defaultValue=""
      rules={{ ...options }}
      render={({ field: { onChange, ref, ...rest } }) => (
        <PasswordInput
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
export default ReactivePasswordField;

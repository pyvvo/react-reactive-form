/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import { Checkbox, CheckboxProps } from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField, ReactiveFieldProps } from '../types';
import { CheckCustomProps } from './types';
import { getMantineError } from '../utils';

const ReactiveCheckbox: FC<IReactiveField<CheckCustomProps>> = (props) => {
  const { form, fieldKey, label, options, error, customProps = {} } = props;

  const { size, disabled, hidden, handleChange } = customProps;

  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;
  const fieldProps: ReactiveFieldProps<CheckboxProps> = {
    id: fieldKey,
    'data-testid': fieldKey,
    label,
    // 'aria-describedby': helperId,
    size,
    disabled,
    required: !!options?.required,
    style: {
      marginBlock: '12px',
      width: '100%',
      display: hidden ? 'none' : undefined
    },
    error: getMantineError(error)
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
      rules={{ ...options }}
      render={({ field: { onChange, value, ref, name, onBlur } }) => (
        <Checkbox
          {...fieldProps}
          onChange={(event) => {
            customHandlechange({ form, event });
            onChange(event);
          }}
          checked={value}
          ref={ref}
          name={name}
          onBlur={onBlur}
        />
      )}
    />
  );
};
export default ReactiveCheckbox;

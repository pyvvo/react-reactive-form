/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import {
  Checkbox,
  CheckboxProps,
  Radio,
  RadioGroupProps,
  RadioProps
} from '@mantine/core';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { IReactiveField, ReactiveFieldProps } from '../types';
import { RadioCustomProps } from './types';

const ReactiveRadio: FC<IReactiveField<RadioCustomProps>> = (props) => {
  const { form, fieldKey, label, options, error, customProps } = props;

  const {
    data,
    size,
    color,
    disabled,
    hidden,
    handleChange,
    orientation,
    spacing,
    offset
  } = customProps;

  type CustomProps = typeof customProps;
  type HandleChangeParams = Parameters<
    NonNullable<CustomProps['handleChange']>
  >['0'];
  const { control } = form;

  const radiogroupsprops: Omit<RadioGroupProps, 'children'> = {
    id: fieldKey,
    orientation,
    spacing,
    offset
  };

  const fieldProps: ReactiveFieldProps<RadioProps> = {
    id: fieldKey,
    'data-testid': fieldKey,
    label,
    // 'aria-describedby': helperId,
    size,
    disabled,
    required: !!options?.required,
    sx: {
      // width: '100%',
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
        <Radio.Group
          {...radiogroupsprops}
          ref={ref}
          name={name}
          onBlur={onBlur}
          onChange={(event) => {
            customHandlechange({ form, event });
            onChange(event);
          }}
          value={value}
          label={label}>
          {data?.map(({ label, value }) => (
            <Radio
              {...fieldProps}
              key={value}
              value={value}
              label={label}
              data-testid={value}
            />
          ))}
        </Radio.Group>
      )}
    />
  );
};
export default ReactiveRadio;

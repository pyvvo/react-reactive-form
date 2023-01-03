/* eslint-disable import/extensions */
/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line object-curly-newline
import { ChangeEvent, ChangeEventHandler, FC, memo, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, TextInputProps } from '@mantine/core';
import { TextFieldCustomProps } from './types';
import { IReactiveField } from '@/types';

const ReactiveTextField: FC<IReactiveField<TextFieldCustomProps>> = (props) => {
  const {
    form,
    key,
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
    id: key,
    // 'aria-describedby': helperId,
    size,
    disabled,
    sx: {
      width: '100%',
      display: hidden ? 'none' : undefined
      // borderStyle: isParentList && !errors ? 'none' : undefined,
      // background: isParentList ? undefined : '#78838c12',
      // maxHeight: isParentList ? '35px' : undefined,
      // '::placeholder': isParentList
      //   ? {
      //       color: errors ? 'red' : undefined
      //     }
      //   : undefined
    },
    // color: errors ? 'error' : color,
    type
    // placeholder: errors && isParentList ? errors.message : undefined,
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
      name={key}
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

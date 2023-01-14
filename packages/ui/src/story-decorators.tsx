/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import { action } from '@storybook/addon-actions';
import type { Decorator, Meta, ReactRenderer } from '@storybook/react';
import { Button, Flex, JsonInput } from '@mantine/core';
import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  Children,
  isValidElement,
  useState
} from 'react';
import { useForm } from 'react-hook-form';
import { getError } from './reactive-form/reactive-fields/utils';
import { FieldMeta } from './reactive-form/form/types';
import { JSONData } from './types';
import { InputType, IReactiveField } from './reactive-form';

// withRHF : https://gist.github.com/shumbo/3bbb8a2dea5ea0a90ecf0b7c103783e8

// type ReactiveFormType = ReactElement<{
//   form: any;
//   children: ReactNode;
// }>;

// interface IFormProvider {
//   children?: ReactNode;
//   // defaultValues: Record<string, any>;
// }
// const StorybookFormProvider: FC<IFormProvider> = (props) => {
//   const { children } = props;
//   const form = useForm({
//     mode: 'onSubmit',
//     reValidateMode: 'onSubmit'
//   });

//   console.log(form);

//   const modifiedChildren = Children.map(children, (child) => {
//     // Checking isValidElement is the safe way and avoids a typescript
//     // error too.
//     if (isValidElement(child)) {
//       return cloneElement(child as ReactiveFormType, {
//         form
//       });
//     }
//     return child;
//   });

//   return (
//     <form onSubmit={form.handleSubmit(action('[React Hooks Form] Submit'))}>
//       {modifiedChildren}
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

type DecoratorParameter<T extends 0 | 1> = Parameters<
  NonNullable<Meta<any>['decorators']>[0]
>[T];

interface IDecoratorParams {
  Story: DecoratorParameter<0>;
  props: DecoratorParameter<1>;
}

interface IFormProvider {
  field: FieldMeta<JSONData, InputType>;
  children?: ReactiveField;
  // defaultValues: Record<string, any>;
}

type ReactiveField = ReactElement<IReactiveField<JSONData, JSONData>>;
const ReactiveFieldWrapper: FC<IFormProvider> = (props) => {
  const { children, field } = props;
  const [value, setValue] = useState('');
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });
  const {
    formState: { errors }
  } = form;
  const { type, ...fieldProps } = field;
  const error = getError(field.fieldKey, errors);

  const onSubmit = (data: any) => {
    setValue(data);
  };
  const handleSubmit = (data: any) => {
    // action(`'[React Hooks Form] Submit'`);
    onSubmit(JSON.stringify(data));
  };

  const modifiedChildren =
    children &&
    Children.map<any, any>(children, (child) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (isValidElement(child)) {
        // @see https://medium.com/@justynazet/passing-props-to-props-children-using-react-cloneelement-and-render-props-pattern-896da70b24f6
        return cloneElement(child as any, {
          args: {
            ...fieldProps,
            form,
            error
          }
        });
      }
      return child;
    });

  // console.log(modifiedChildren);

  return (
    <form
      style={{ maxWidth: '300px' }}
      onSubmit={form.handleSubmit(handleSubmit)}>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap">
        {modifiedChildren}
        <Button type="submit">Submit</Button>
        <JsonInput
          label="Result"
          placeholder="Input result"
          validationError="Invalid json"
          formatOnBlur
          autosize
          minRows={4}
          value={value}
        />
      </Flex>
    </form>
  );
};

export const ReactiveFormDecorator = (
  Story: IDecoratorParams['Story'],
  props: IDecoratorParams['props']
) => {
  const { args } = props;
  // console.log({ props });

  return (
    <ReactiveFieldWrapper field={{ ...args }}>
      {/* <Story args={{ fieldKey: 'dda' }} /> */}
      <Story />
    </ReactiveFieldWrapper>
  );
};

// export const ReactiveFieldDecorator = (props: IFormProvider) => (Story: FC) =>
//   (
//     <ReactiveFieldWrapper>
//       <Story />
//     </ReactiveFieldWrapper>
//   );
// export const ReactiveFormDecorator = (props: IFormProvider) => (Story: FC) =>
//   (
//     <StorybookFormProvider>
//       <Story />
//     </StorybookFormProvider>
//   );

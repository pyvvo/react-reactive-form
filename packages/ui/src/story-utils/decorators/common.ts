import { Meta } from '@storybook/react';

type DecoratorParameter<T extends 0 | 1> = Parameters<
  NonNullable<Meta<any>['decorators']>[0]
>[T];

export interface IDecoratorParams {
  Story: DecoratorParameter<0>;
  props: DecoratorParameter<1>;
}

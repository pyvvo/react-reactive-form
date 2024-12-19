/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import { Spotlight } from '@mantine/spotlight';
import { IDecoratorParams } from './common';
import { SpotlightActions } from "@mantine/spotlight/lib/Spotlight";

export const MantineSpotlightDecorator = (
  Story: IDecoratorParams['Story'],
  props: IDecoratorParams['props']
) => {
  const {
    args: { actions, ...rest }
  } = props;

  return (
    <>
      <Spotlight actions={(actions as SpotlightActions[])} />
      <Story args={{ ...rest }} />
    </>
  );
};

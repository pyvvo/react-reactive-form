import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { FC } from 'react';

const ToggleThemeMode: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="default"
      mx="xs"
      onClick={() => toggleColorScheme()}
      size={30}>
      {colorScheme === 'dark' ? (
        <IconSun size={16} />
      ) : (
        <IconMoonStars size={16} />
      )}
    </ActionIcon>
  );
};

export default ToggleThemeMode;

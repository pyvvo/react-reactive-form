/* eslint-disable react/require-default-props */
import { Center, AppShell, Stack, Box, Group } from '@mantine/core';
import { FC, useCallback } from 'react';
import { CNDIcon } from '@/atoms';
import NavbarButton from './navbar-button';
import { IModuleLink } from '../types';

interface ISideBar {
  modules: IModuleLink[];
}

const SideBar: FC<ISideBar> = (props) => {
  const { modules, ...rest } = props;

  const menu = useCallback(
    (mainModules: IModuleLink[]) =>
      mainModules.filter((item) => !item.isBottom),
    // .sort((a, b) => a.label.localeCompare(b.label))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modules]
  );

  const bottomMenu = useCallback(
    (mainModules: IModuleLink[]) =>
      mainModules
        .filter((item) => item.isBottom)
        .sort((a, b) => a.label.localeCompare(b.label)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modules]
  );

  return (
    <Box
      h="100vh"
      sx={{ top: 0, paddingBlock: '18px',position:"fixed",width:'80px', boxShadow: '0px 0px 21px 0px #5f5f5f1a', }}
      component="nav"
      px="md"
      {...rest}>
      <Center>
        <CNDIcon />
      </Center>
      <Group grow  component="section" mt={50}>
        <Stack justify="center" gap="sm">
          {menu(modules).map((link) => (
            <NavbarButton
              to={link.to ?? ''}
              color={link.color}
              label={link.label}
              icon={link.icon}
              key={link.label}
            />
          ))}
        </Stack>
      </Group>
      <Group grow  component="section">
        <Stack justify="center" gap="sm">
          {bottomMenu(modules).map((link) => (
            <NavbarButton
              to={link.to ?? ''}
              color={link.color}
              label={link.label}
              icon={link.icon}
              key={link.label}
            />
          ))}
        </Stack>
      </Group>
    </Box>
  );
};

export default SideBar;

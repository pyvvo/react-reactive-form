/* eslint-disable react/require-default-props */
import { Center, Navbar, Stack } from '@mantine/core';
import { FC, useCallback } from 'react';
import { CNDIcon } from '@/atoms';
import NavbarButton from './navbar-button';
import { IModuleLink } from '../types';

interface ISideBar {
  modules: IModuleLink[];
}

const SideBar: FC<ISideBar> = (props) => {
  const { modules } = props;

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
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <CNDIcon />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
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
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
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
      </Navbar.Section>
    </Navbar>
  );
};

export default SideBar;

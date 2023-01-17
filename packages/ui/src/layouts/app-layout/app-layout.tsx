/* eslint-disable react/require-default-props */
import { AppShell, Box, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomBar } from '../bottom-bar';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import { IModuleLink } from '../types';

interface ILayout {
  modules: IModuleLink[];
  // moduleName: string;
}

const AppLayout: FC<ILayout> = (props) => {
  const { modules } = props;
  const location = useLocation();
  const [moduleName, setModuleName] = useState('');
  const isMobile = useMediaQuery('(min-width: 648px)');
  useEffect(
    () =>
      setModuleName(
        modules.find((link) => link.to === location.pathname)?.label ?? ''
      ),
    [location]
  );

  return (
    <Box {...props}>
      <Grid>
        <Grid.Col>
          <Header moduleName={moduleName} />
        </Grid.Col>
        <Grid.Col span="content">
          {!isMobile ? (
            <BottomBar modules={modules} visible />
          ) : (
            <SideBar modules={modules} />
          )}
        </Grid.Col>
        <Grid.Col span="auto" pt={60} pl={60}>
          <Outlet />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AppLayout;

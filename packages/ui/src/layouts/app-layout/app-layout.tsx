/* eslint-disable react/require-default-props */
import { Box, Grid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomBar } from '../bottom-bar';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import { IModuleLink } from '../types';
import styles from './app-layout.module.css';
interface ILayout {
  modules: IModuleLink[];
  imageSrc: string;
  offset: number;
}

const AppLayout: FC<ILayout> = (props) => {
  const { modules, imageSrc, offset, ...rest } = props;
  const location = useLocation();
  const [moduleName, setModuleName] = useState('');
  const theme = useMantineTheme();
  const isLaptop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  useEffect(
    () =>
      setModuleName(
        modules.find((link) => link.to === location.pathname)?.label ?? ''
      ),
    [location]
  );

  return (
    <Box {...rest}>
      <Grid>
        <Grid.Col>
          <Header
            moduleName={moduleName}
            imageSrc={imageSrc}
            offset={isLaptop ? 80 : undefined}
          />
        </Grid.Col>
        <Grid.Col span="content">
          {isLaptop ? (
            <SideBar modules={modules} />
          ) : (
            <BottomBar modules={modules} visible />
          )}
        </Grid.Col>
        <Grid.Col span="auto" className={styles.mainParent}>
          <Box component="main" className={styles.main}>
            <Outlet />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AppLayout;

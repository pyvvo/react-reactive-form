/* eslint-disable react/require-default-props */
import {
  Box,
  Grid,
  lighten,
  useComputedColorScheme,
  useMantineTheme
} from '@mantine/core';
import { Global, createStyles } from '@mantine/emotion';
import { useMediaQuery } from '@mantine/hooks';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BottomBar } from '../bottom-bar';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import { IModuleLink } from '../types';

interface IStyleParams {
  offset: number;
}

const useStyles = createStyles((theme, _: IStyleParams, u) => ({
  mainParent: {
    paddingTop: '60px',
    paddingLeft: `0px`,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
    [u.largerThan('sm')]: {
      paddingLeft: `${_.offset}px`
    }
  },

  main: {
    paddingInline: '18px'
  }
  //   themeToggler: {
  //   [theme.fn.smallerThan('sm')]: {
  //     fontSize: theme.fontSizes.xl
  //   }
  // }
}));

interface ILayout {
  modules: IModuleLink[];
  imageSrc: string;
  offset: number;
}

const AppLayout: FC<ILayout> = (props) => {
  const { modules, imageSrc, offset, ...rest } = props;
  const location = useLocation();
  const [moduleName, setModuleName] = useState('');
  const computedColorScheme = useComputedColorScheme('light');
  const { classes, cx } = useStyles({ offset });
  const theme = useMantineTheme();
  const isLaptop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const color = theme.colors[theme.primaryColor][0];
  console.log(theme.breakpoints.sm);
  

  useEffect(
    () =>
      setModuleName(
        modules.find((link) => link.to === location.pathname)?.label ?? ''
      ),
    [location]
  );

  return (
    <Box {...rest}>
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor:
              computedColorScheme === 'dark' ? undefined : lighten(color, 0.6)
          }
        })}
      />
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
        <Grid.Col span="auto" className={classes.mainParent}>
          <Box component="main" className={classes.main}>
            <Outlet />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AppLayout;

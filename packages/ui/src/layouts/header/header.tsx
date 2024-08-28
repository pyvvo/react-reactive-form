/* eslint-disable react/require-default-props */
import { Avatar, Box, Portal, Title } from '@mantine/core';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { createStyles } from '@mantine/emotion';
import { FC, useEffect } from 'react';
import { SearchBar, ToggleThemeMode } from '@/molecules';

interface IStyleParams {
  offset: number;
}

const useStyles = createStyles((theme, _:IStyleParams,u) => ({
  header: {
    display: 'flex',
    height: '60px',
    width: `calc(100% - ${_.offset + 24}px)`,
    borderRadius: '18px',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 5,
    // width: 'calc(100vw - 65px)',
    right: '12px',
    zIndex: 100,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',

    [u.largerThan('sm')]: {
      justifyContent: 'space-evenly'
    }
  },

  featureBar: {
    display: 'flex',
    justify: 'space-around',
    alignItems: 'center',
    borderRadius: '22px',
    backgroundColor: 'transparent',
    padding: '0px',
    [u.largerThan('xs')]: {
      boxShadow: '0px 0px 21px 0px #5f5f5f1a',
      padding: '6px',
      [u.dark] :{
        backgroundColor: theme.black,
      },
      [u.light]: {
        backgroundColor: theme.white,
      },
    }
  },
  title: {
    color: theme.primaryColor,
    fontSize: '24px',
    [u.largerThan('xs')]: {
      fontSize: '30px'
    }
  },
  searchBar: {
    display: 'none',
    [u.largerThan('xs')]: {
      display: 'block'
    }
  }
  //   themeToggler: {
  //   [theme.fn.smallerThan('sm')]: {
  //     fontSize: theme.fontSizes.xl
  //   }
  // }
}));


// const useStyles = createStyles((theme, _,u) => ({
//   header: {
//     display: 'flex',
//     height: '60px',
//     // width: `calc(100% - ${pr.offset + 24}px)`,
//     width: `calc(100% - ${300 + 24}px)`,

//     borderRadius: '18px',
//     position: 'fixed',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     top: 5,
//     // width: 'calc(100vw - 65px)',
//     right: '12px',
//     zIndex: 100,
//     // backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
//     WebkitBackdropFilter: 'blur(10px)',
//     backdropFilter: 'blur(10px)',

//     [theme.fn.largerThan('sm')]: {
//       justifyContent: 'space-evenly'
//     }
//   },

//   featureBar: {
//     display: 'flex',
//     justify: 'space-around',
//     alignItems: 'center',
//     borderRadius: '22px',
//     backgroundColor: 'transparent',
//     padding: '0px',
//     [theme.fn.largerThan('xs')]: {
//       boxShadow: '0px 0px 21px 0px #5f5f5f1a',
//       padding: '6px',
//       backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white
//     }
//   },
//   title: {
//     color: theme.colors[theme.primaryColor],
//     fontSize: '24px',
//     [theme.fn.largerThan('xs')]: {
//       fontSize: '30px'
//     }
//   },
//   searchBar: {
//     display: 'none',
//     [theme.fn.largerThan('xs')]: {
//       display: 'block'
//     }
//   }
// }));

const container = document.createElement('div');
const containerId = '#hm-overlay-header';
container.id = containerId;

interface IHeader {
  moduleName: string;
  imageSrc?: string;
  offset?: number;
}

const Header: FC<IHeader> = (props) => {
  const { moduleName, imageSrc, offset = 0 } = props;
  const { classes, cx } = useStyles({ offset });

  useEffect(() => {
    if (container) {
      document.body.appendChild(container);
      return;
    }
    // eslint-disable-next-line consistent-return
    return () => document.getElementById(containerId)?.remove();
  }, [container]);

  return (
    <Portal target={container}>
      <Box
        component="header"
        className={classes.header}
        // style={{ justifyContent: 'space-around' }}
      >
        <Title size="h1" className={classes.title}>
          {moduleName}
        </Title>
        <Box className={classes.featureBar}>
          <SearchBar
            className={classes.searchBar}
            onClick={() => spotlight.open()}
          />
          <ToggleThemeMode />
          <Avatar
            radius="xl"
            mx="xs"
            src={imageSrc}
            sx={(theme) => ({
              color: theme.primaryColor
            })}
          />
        </Box>
      </Box>
    </Portal>
  );
};

export default Header;

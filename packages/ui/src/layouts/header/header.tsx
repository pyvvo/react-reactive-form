/* eslint-disable react/require-default-props */
import {
  Avatar,
  Box,
  Flex,
  Header as MHeader,
  Portal,
  Title
} from '@mantine/core';
import { FC, useEffect } from 'react';
import { SearchBar, ToggleThemeMode } from '@/molecules';

interface IHeader {
  moduleName: string;
}

const Header: FC<IHeader> = (props) => {
  const { moduleName } = props;
  const container = document.createElement('div');
  const containerId = '#hm-overlay';
  container.id = containerId;
  // const isMobile = useMediaQuery('(min-width: 648px)');

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
      <MHeader
        height={60}
        sx={(theme) => ({
          display: 'flex',
          width: '100%',
          borderRadius: '18px',
          position: 'fixed',
          right: '80px',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          top: 5,
          left: 100,
          zIndex: 100,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.black : theme.white,
          '-webkit-backdrop-filter': 'blur(10px)',
          'backdrop-filter': 'blur(10px)'
        })}>
        <Title size="h1">{moduleName}</Title>
        <Box
          sx={(theme) => ({
            boxShadow: '0px 0px 21px 0px #5f5f5f1a',
            display: 'flex',
            justify: 'space-around',
            alignItems: 'center',
            paddingBlock: '6px',
            paddingInline: '6px',
            borderRadius: '22px',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.black : theme.white
          })}>
          <SearchBar />
          <ToggleThemeMode />
          <Avatar
            radius="xl"
            mx="xs"
            sx={(theme) => ({
              color: theme.primaryColor
            })}
          />
        </Box>
      </MHeader>
    </Portal>
  );
};

export default Header;

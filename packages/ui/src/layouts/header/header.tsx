/* eslint-disable react/require-default-props */
import { SearchBar, ToggleThemeMode } from '@/molecules';
import { Avatar, Box, Portal, Title } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import { FC, useEffect } from 'react';
import styles from './header.module.css';

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
        className={styles.header}
      >
        <Title size="h1" className={styles.title}>
          {moduleName}
        </Title>
        <Box className={styles.featureBar}>
          <SearchBar
            className={styles.searchBar}
            onClick={() => spotlight.open()}
          />
          <ToggleThemeMode />
          <Avatar
            radius="xl"
            mx="xs"
            src={imageSrc}
            style={(theme) => ({
              color: theme.primaryColor
            })}
          />
        </Box>
      </Box>
    </Portal>
  );
};

export default Header;

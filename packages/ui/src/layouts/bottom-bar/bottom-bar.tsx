/* eslint-disable react/require-default-props */
import { Box, Group, Portal } from '@mantine/core';
import { FC, useCallback, useEffect } from 'react';
import { IModuleLink } from '../types';
import NavbarButton from './bottom-bar-button';

const container = document.createElement('div');
const containerId = '#hm-overlay-bottom';
container.id = containerId;

interface IBottomBar {
  modules: IModuleLink[];
  visible: boolean;
}

const BottomBar: FC<IBottomBar> = (props) => {
  const { modules, visible } = props;

  // const isMobile = useMediaQuery('(min-width: 648px)');

  useEffect(() => {
    if (visible) {
      document.body.appendChild(container);
    }
    // eslint-disable-next-line consistent-return
    // eslint-disable-next-line consistent-return
    return () => document.getElementById(containerId)?.remove();
  }, [visible]);

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
    <Portal target={container}>
      <Box
      component="nav"
        style={{
          width: '70%',
          boxShadow: '0px 0px 21px 0px #5f5f5f1a',
          borderRadius: '18px',
          height: '55px',
          position: 'fixed',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          bottom: 0,
          zIndex: 200
        }}>
        <Group grow  component="section"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {menu(modules).map((link) => (
            <NavbarButton
              to={link.to ?? ''}
              color={link.color}
              label={link.label}
              icon={link.icon}
              key={link.label}
            />
          ))}
        </Group>
      </Box>
    </Portal>
  );
};

export default BottomBar;

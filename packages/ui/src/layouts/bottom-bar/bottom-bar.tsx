/* eslint-disable react/require-default-props */
import { Navbar, Portal } from '@mantine/core';
import { FC, useCallback, useEffect } from 'react';
import { IModuleLink } from '../types';
import NavbarButton from './bottom-bar-button';

interface IBottomBar {
  modules: IModuleLink[];
  visible: boolean;
}

const BottomBar: FC<IBottomBar> = (props) => {
  const { modules, visible } = props;
  const container = document.createElement('div');
  const containerId = '#hm-overlay-bottom';
  container.id = containerId;
  // const isMobile = useMediaQuery('(min-width: 648px)');

  useEffect(() => {
    if (visible) {
      document.body.appendChild(container);
    }
    // eslint-disable-next-line consistent-return
    // return () => document.getElementById(containerId)?.remove();
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
      <Navbar
        sx={{
          width: '70%',
          borderRadius: '18px',
          height: '55px',
          position: 'fixed',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          bottom: 0,
          zIndex: 200
        }}>
        <Navbar.Section
          grow
          sx={{
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
        </Navbar.Section>
      </Navbar>
    </Portal>
  );
};

export default BottomBar;

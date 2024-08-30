/* eslint-disable react/require-default-props */
import { MantineColor, Tooltip, UnstyledButton } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import { FC, useState } from 'react';
import { NavBarLink } from '@/molecules';
import styles from './navbar-button.module.css';

interface INavbarButton {
  icon: TablerIcon;
  label: string;
  color?: MantineColor;
  onClick?: () => void;
  to: string;
}

const NavbarButton: FC<INavbarButton> = (props) => {
  const { icon: Icon, label, onClick, color, to } = props;
  const [isActive, setIsActive] = useState(false);
  const handleIsactive = (param: boolean) => {
    setIsActive(param);
  };
  console.log(isActive, label);

  return (
    <NavBarLink to={to} handleIsActive={handleIsactive}>
      <Tooltip
        label={label}
        position="right"
        transitionProps={{ duration: 100 }}
        color={color}>
        <UnstyledButton
          onClick={onClick}
          mod={[{ active: isActive }]}
          className={styles.link}>
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavBarLink>
  );
};

export default NavbarButton;

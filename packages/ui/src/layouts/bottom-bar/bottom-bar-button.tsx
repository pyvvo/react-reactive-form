/* eslint-disable react/require-default-props */
import { MantineColor, Tooltip, UnstyledButton } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

import { TablerIcon } from '@tabler/icons';
import { FC, useState } from 'react';
import { NavBarLink } from '@/molecules';

const useStyles = createStyles((theme, _, u) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [u.light]: {
      color: theme.colors.gray[7],
      '&:hover': {
        backgroundColor: theme.colors.indigo[0]
      }
    },
    [u.dark]: {
      color: theme.colors.dark[0],
      '&:hover': {
        backgroundColor: theme.colors.dark[5]
      }
    }
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.primaryColor[2],
      color: theme.primaryColor[2]
    }
  }
}));

interface INavbarButton {
  icon: TablerIcon;
  label: string;
  color?: MantineColor;
  onClick?: () => void;
  to: string;
}

const NavbarButton: FC<INavbarButton> = (props) => {
  const { icon: Icon, label, onClick, color, to } = props;
  const { classes, cx } = useStyles();
  const [isActive, setIsActive] = useState(false);
  const handleIsactive = (param: boolean) => {
    setIsActive(param);
  };

  return (
    <NavBarLink to={to} handleIsActive={handleIsactive}>
      <Tooltip
        label={label}
        position="right"
        transitionProps={{ duration: 100 }}
        color={color}>
        <UnstyledButton
          onClick={onClick}
          className={cx(classes.link, { [classes.active]: isActive })}>
          <Icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavBarLink>
  );
};

export default NavbarButton;

/* eslint-disable react/require-default-props */
import {
  createStyles,
  MantineColor,
  Tooltip,
  UnstyledButton
} from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import { FC, useState } from 'react';
import { NavBarLink } from '@/molecules';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.indigo[0]
    }
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
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
        transitionDuration={100}
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

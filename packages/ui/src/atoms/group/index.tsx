/* eslint-disable react/require-default-props */
import React, { FC, HTMLAttributes } from 'react';
import Box from '../box';
import cn from '@/theme/cn.helpers';

export interface IGroup extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end' | 'stretch';
  spacing?: number;
  direction?: 'row' | 'column';
  position?: 'left' | 'center' | 'right';
}
const Group: FC<IGroup> = ({ ...props }) => {
  const {
    align,
    spacing,
    direction,
    position,
    className,
    children,
    style,
    ...rest
  } = props;

  const groupStyle = {
    display: 'flex',
    flexDirection: direction ?? 'row',
    alignItems: align ?? 'start',
    justifyContent: position ?? 'left'
  };

  const mergeStyle = { ...groupStyle, ...style };

  const childStyle = {
    marginRight: `${spacing}px`
    // width: '100%'
  };

  const childrenArray = React.Children.toArray(children);
  const prefix = 'py-child';
  return (
    <Box className={cn(className)} style={mergeStyle} {...rest}>
      {childrenArray.map((child, index) => (
        <Box
          key={`${prefix}${child.valueOf}`}
          style={index < childrenArray.length - 1 ? childStyle : {}}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Group;

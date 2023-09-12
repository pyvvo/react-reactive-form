import React, { HTMLAttributes, CSSProperties, forwardRef } from 'react';
import cn from '@/theme/cn.helpers';

export interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line react/require-default-props
  sx?: CSSProperties;
}

const Box: React.ForwardRefRenderFunction<HTMLDivElement, IBoxProps> = (
  { sx, className, ...props },
  ref
) => <div className={cn(className)} style={sx} {...props} ref={ref} />;

export default React.forwardRef(Box);

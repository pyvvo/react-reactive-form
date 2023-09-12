import React from 'react';
import { useVariant } from '@/theme';
import { ITextVariants } from '@/theme/theme.context';
import cn from '@/theme/cn.helpers';

export interface ITextProps
  extends ITextVariants,
    React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.ForwardRefRenderFunction<HTMLParagraphElement, ITextProps> = (
  { className, size, ff, fs, fw, align, cl, line, tt, children, ...props },
  ref
) => {
  const variant = useVariant('text');
  return (
    // eslint-disable-next-line react/button-has-type
    <p
      className={cn(variant({ size, ff, fs, fw, align, line, tt }), className)}
      ref={ref}
      style={{ color: cl }}
      {...props}>
      {children}
    </p>
  );
};

export default React.forwardRef(Text);

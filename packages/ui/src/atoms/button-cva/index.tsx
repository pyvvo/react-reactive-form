import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useVariant } from '@/theme';
import { IButtonVariants } from '@/theme/theme.context';
import cn from '@/theme/cn.helpers';

export interface ButtonProps
  extends IButtonVariants,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const defaultProps: ButtonProps = {
  intent: 'primary',
  size: 'medium'
};

const ButtonCva: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  const a = intent ?? defaultProps.intent;
  const b = size ?? defaultProps.size;
  const variant = useVariant('button');
  // const _className = className ?? variant({ intent: a, size: b });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={cn(variant({ intent, size }), className)} {...props}>
      Click me!
    </button>
  );
};

export default ButtonCva;

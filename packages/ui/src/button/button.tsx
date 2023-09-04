import { useVariant } from '@/theme';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent: 'primary' | 'secondary' | 'default';
  size: 'small' | 'medium' | 'large';
  roundness: 'square' | 'round' | 'pill';
  children: React.ReactNode;
}

const ButtonVariants = (props: ButtonProps): string => {
  const variants = useVariant('button');
  return [
    variants.intent[props.intent],
    variants.size[props.size],
    variants.roundness[props.roundness]
  ].join(' ');
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // add useVariant hook here
  const className = ButtonVariants(props);
  return (
    <button ref={ref} {...props} className={className} data-testid="button">
      {props.children}
    </button>
  );
});

export default Button;

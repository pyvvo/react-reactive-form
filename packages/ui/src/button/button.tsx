import { Button as MButton, ButtonProps } from '@mantine/core';
import { forwardRef } from 'react';

// interface ButtonProps {
//   children: React.ReactNode;
// }

// Create intermediate component with default ref type and props
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <MButton ref={ref} {...props} data-testid="button">
    {props.children}
  </MButton>
));

export default Button;

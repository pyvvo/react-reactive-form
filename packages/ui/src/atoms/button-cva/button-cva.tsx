// /* eslint-disable react/require-default-props */
// /* eslint-disable tailwindcss/no-custom-classname */
// // import { createStyles } from '@mantine/core';
// import { FC, SVGProps } from 'react';
// import { cva, VariantProps } from 'class-variance-authority';

// const ButtonVariants = cva(
//   /* button base style */
//   'ButtonVariants',
//   // 'h-fit text-white uppercase transition-colors duration-150',
//   {
//     variants: {
//       /* button colors */
//       intent: {
//         primary: [
//           'bg-blue-500',
//           'text-white',
//           'border-transparent',
//           'hover:bg-blue-600'
//         ],
//         secondary: [
//           'bg-white',
//           'text-gray-800',
//           'border-gray-400',
//           'hover:bg-gray-100'
//         ]
//       }

//       //         /* button sizes */
//       //         size: {
//       //             small: ["text-sm", "py-1", "px-2"],
//       //             medium: ["text-base", "py-2", "px-4"],
//       //             large: ["text-lg", "py-4", "px-8"],
//       //         },

//       //         /* button roundness */
//       //         roundness: {
//       //             square: "rounded-none",
//       //             round: "rounded-md",
//       //             pill: "rounded-full",
//       //         },
//       //     },

//       //     // defaults
//       //     defaultVariants: {
//       //         intent: "default",
//       //         size: "medium",
//       //         roundness: "round"
//       //     },
//     }
//   }
// );

// export interface IButtonCva
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof ButtonVariants> {}

// const ButtonCva: FC<IButtonCva> = (props) => {
//   const { intent } = props;
//   return (
//     <button className={ButtonVariants({ intent: 'primary' })}>
//       Clic me!
//     </button>
//   );
// };

// export default ButtonCva;
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useVariant } from '@/theme';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  const variant = useVariant('button');
  console.log("here");

  // eslint-disable-next-line react/button-has-type
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={variant({ intent, size })} {...props}>
      Click me!
    </button>
  );
};

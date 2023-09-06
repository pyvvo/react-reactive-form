import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariant = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-green-500',
        'text-black',
        'border-transparent',
        'hover:bg-blue-600'
      ],
      secondary: [
        'bg-red-500',
        'text-white-800',
        'border-gray-400',
        'hover:bg-gray-100'
      ]
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-xl', 'py-5', 'px-5']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

const defaultTheme: any = {
  button: buttonVariant
};

export default defaultTheme;

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

const titleVariant = cva('title', {
  variants: {
    // color: {
    //   red: 'text-red-500',
    //   lime: 'text-lime-500',
    //   orange: 'text-orange-500',
    //   gray: 'text-gray-500',
    //   black: 'text-black'
    // },
    level: {
      h1: 'text-6xl font-bold',
      h2: 'text-5xl font-bold',
      h3: 'text-4xl font-bold',
      h4: 'text-2xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold'
    },
    align: {
      left: 'text-left',
      right: 'text-right',
      justify: 'text-justify',
      center: 'text-center'
    }
  },
  defaultVariants: {
    level: 'h1'
    // color: 'black'
  }
});
const defaultTheme: any = {
  button: buttonVariant,
  title: titleVariant
};

export default defaultTheme;

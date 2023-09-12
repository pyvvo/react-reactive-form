import { cva } from "class-variance-authority";

// const button = cva('button', {
//     variants: {
//       intent: {
//         primary: [
//           'bg-green-500',
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
//       },
//       size: {
//         small: ['text-sm', 'py-1', 'px-2'],
//         medium: ['text-base', 'py-2', 'px-4']
//       }
//     },
//     defaultVariants: {
//       intent: 'primary',
//       size: 'medium'
//     }
//   });


const pyButton = cva('', {
  variants: {
    intent: {
      primary: [
        'bg-green-500',
        'text-white',
        'border-transparent',
        'hover:bg-red-600'
      ],
      secondary: [
        'bg-red-500',
        'text-gray-800',
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

const pyTitleVariant = cva('', {
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
    level: 'h1',
    // color: 'black'
  }
});

const pyText = cva('', {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl']
    },
    ff: {
      sans: ['font-sans'],
      serif: ['font-serif'],
      mono: ['font-mono']
    },
    fs: {
      italic: ['italic'],
      normal: ['not-italic']
    },
    fw: {
      black: ['font-black'],
      extrabold: ['font-extrabold'],
      bold: ['font-bold'],
      semibold: ['font-semibold'],
      medium: ['font-medium'],
      normal: ['font-normal'],
      light: ['font-light'],
      extralight: ['font-extralight'],
      thin: ['font-thin']
    },
    align: {
      end: ['text-end'],
      start: ['text-start'],
      justify: ['text-justify'],
      right: ['text-right'],
      center: ['text-center'],
      left: ['text-left']
    },
    line:{
      overline:['overline'],
      underline:['underline'],
      through:['line-through'],
      noline:['no-underline']
    },
    tt:{
      normal:['normal-case'],
      uppercase:['uppercase'],
      lowercase:['lowercase'],
      capitalize:['capitalize']
    }
  }
});

export const pyTheme: any = {
  button: pyButton,
  title: pyTitleVariant,
  text: pyText
};

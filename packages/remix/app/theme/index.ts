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
const ButtonVariants = cva(
    /* button base style */
    "h-fit text-white uppercase transition-colors duration-150",
    {
      variants: {
        /* button colors */
        intent: {
          primary:
            "bg-green-500 hover:bg-green-600",
          secondary:
            "bg-red-500 hover:bg-red-600",
          default:
            "bg-gray-500 hover:bg-gray-600",
        },
  
        /* button sizes */
        size: {
          small: ["text-sm", "py-1", "px-2"],
          medium: ["text-base", "py-2", "px-4"],
          large: ["text-lg", "py-4", "px-8"],
        },
  
        /* button roundness */
        roundness: {
          square: "rounded-none",
          round: "rounded-md",
          pill: "rounded-full",
        },
      },
  
      // defaults
      defaultVariants: {
        // intent: "default",
        size: "medium",
        roundness: "round"
      },
    }
  );
  
  
  
 export const pyTheme: any = {
    button: ButtonVariants
  }
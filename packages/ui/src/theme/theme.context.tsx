/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode } from 'react';

interface IButtonVariants {
  intent: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

export interface IThemeContext {
  button: (params: IButtonVariants) => string;
  // checkbox: any;
  // ... add other variants as needed
}

/**
 *  HMR breaks by Vitejs with React context provider
 * The workaround is to dedicate a seperate file for context and his related provider
 * @see https://github.com/vitejs/vite/issues/3301#issuecomment-1192661323
 * work in progress to resolve this vitejs isssue
 * @see https://github.com/vitejs/vite/issues/3301#issuecomment-1257374648
 */
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

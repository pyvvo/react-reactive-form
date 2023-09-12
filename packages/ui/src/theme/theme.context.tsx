/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode } from 'react';
import { TitleOrder } from '@/atoms/title';

export interface IButtonVariants {
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export interface ITextVariants {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  ff?: 'sans' | 'serif' | 'mono';
  fs?: 'italic' | 'normal';
  fw?: React.CSSProperties['fontWeight'];
  align?: 'start' | 'justify' | 'right' | 'center' | 'left' | 'end';
  cl?: React.CSSProperties['color'];
  line?: 'underline' | 'overline' | 'noline' | 'through';
  tt?: 'normal' | 'uppercase' | 'lowercase' | 'capitalize';
}

export interface ITitleVariants {
  cl?: React.CSSProperties['color'];
  level?: TitleOrder;
  align?: 'left' | 'right' | 'center' | 'end' | 'start' | 'justify';
  underline?: boolean;
}

export interface IThemeContext {
  button: (params: IButtonVariants) => string;
  title: (params: ITitleVariants) => string;
  text: (params: ITextVariants) => string;
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

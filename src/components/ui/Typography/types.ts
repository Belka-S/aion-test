import { PropsWithChildren } from 'react';

export const weightNames = {
  100: 'thin',
  200: 'extraLight',
  300: 'light',
  400: 'regular',
  500: 'medium',
  600: 'semiBold',
  700: 'bold',
  800: 'extraBold',
  900: 'black',
};

export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ITypographyProps extends PropsWithChildren {
  className?: string;
  el: Element;
  fontWeight?: FontWeight;
}

export interface IHeadingProps {
  className?: string;
  fontWeight?: FontWeight;
  children: string;
}

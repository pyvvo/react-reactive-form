import { useContext } from 'react';
import { ThemeContext, IThemeContext } from './theme.context';
import defaultTheme from './default-theme';

function useVariant<T extends keyof IThemeContext>(
  componentName: T
): IThemeContext[T] {
  /* Si on veut partir du principe qu'on va toujours utiliser le providers dans nos projects */
  // const theme = useContext(ThemeContext);
  // if (Object.keys(theme).length === 0) {
  //   throw new Error('useVariant must be used within a PyvvoThemeProvider');
  // }

  /* Fusionner le theme envoyer dans le provider et celui du theme par defaut */
  const theme = useContext(ThemeContext);
  const mergeTheme = { ...defaultTheme, ...theme };  

  const variant = mergeTheme[componentName];

  // if (!variant) {
  //   throw new Error(`No variants found for component: ${componentName}`);
  // }

  return variant;
}

export default useVariant;

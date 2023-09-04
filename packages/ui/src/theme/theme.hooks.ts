import { useContext } from 'react';
import { ThemeContext, IThemeContext } from './theme.context';

function useVariant<T extends keyof IThemeContext>(componentName: T): IThemeContext[T] {
    const theme = useContext(ThemeContext);
    if (!theme) {
      throw new Error('useVariant must be used within a ThemeProvider');
    }
  
    const variant = theme[componentName];
    if (!variant) {
      throw new Error(`No variants found for component: ${componentName}`);
    }
  
    return variant;
}

export default useVariant;
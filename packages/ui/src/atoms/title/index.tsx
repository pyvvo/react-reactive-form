import React from 'react';
import { useVariant } from '@/theme';
import { ITitleVariants } from '@/theme/theme.context';
import cn from '@/theme/cn.helpers';

// A déplacer après
export type TitleOrder = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ITitleProps
  extends ITitleVariants,
    React.HTMLAttributes<HTMLHeadingElement> {
  //   weight:  Il y en a beaucoup 😮‍💨
}

const defaultProps: Partial<ITitleProps> = {
  // color: 'black',
  level: 'h1'
};

const Title: React.ForwardRefRenderFunction<HTMLHeadingElement, ITitleProps> = (
  { className, level, cl, align, children, underline, ...props },
  ref
) => {
  const titleLevel = level ?? defaultProps.level;

  const variant = useVariant('title');
  const title = React.createElement(
    `${titleLevel}`,
    {
      className: cn(
        variant({
          align,
          level
        }),
        underline ? 'underline' : '',
        // `text-[${cl}]`, /* A changer avec la couleur du theme */
        className
      ),
      // eslint-disable-next-line max-len
      /* La couleur dans le tailwind ne s'applique pas. A changer après l'ajout des couleurs dans le theme */
      style: {
        color: cl
      },
      ref,
      ...props
    },
    children
  );

  return title;
};

export default React.forwardRef(Title);

type TextOwnProps<E extends React.ElementType> = {
  as?: E;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>({ as, size, color, children }: TextProps<E>) => {
  const Component = as || 'div';

  return <Component className={`class-with-${size}-${color}`}>{children}</Component>;
};

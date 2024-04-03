type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  /* Hover the position text to see all the combination */
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

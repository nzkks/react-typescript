import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ marginTop: 20, backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
  );
};

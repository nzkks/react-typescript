import { Login } from './Login';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <Login />;
  }
};

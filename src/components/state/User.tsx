import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // if we are confident that the user will be initialized soon after login, we can trick typescript that the empty object has the specified type

  const handleLogin = () => {
    setUser({
      name: 'Jakie Chan',
      email: 'jakie@kungfu.com'
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>
        User name is {user.name} and email is {user.email}
      </div>
    </div>
  );
};

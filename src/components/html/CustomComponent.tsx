import React from 'react';
import { Greet } from '../props/Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 'Welcome guest!'}
      </h2>
    </div>
  );
};

import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Button } from './components/props/Button';
import { Container } from './components/props/Container';
import { Greet } from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Input } from './components/props/Input';
import { Oscar } from './components/props/Oscar';
import { Person } from './components/props/Person';
import { PersonList } from './components/props/PersonList';
import { Status } from './components/props/Status';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { User as ExampleUserForContext } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter as CounterClass } from './components/class/Counter';
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ];

  return (
    <ThemeContextProvider>
      <Greet name="NZKKS" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet isLoggedIn={false} />
      <Button
        handleClick={(e, id) => {
          console.log('Button clicked!', e, id);
        }}
      />
      <Input value="" />
      <Container styles={{ border: '1px solid black', padding: '1rem', margin: 10 }} />
      <LoggedIn />
      <User />
      <Counter />
      <Box />
      <UserContextProvider>
        <ExampleUserForContext />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <CounterClass message="The Count value is " />
      <Private isLoggedIn={true} component={Profile} />
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={item => console.log(item)} />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} />
    </ThemeContextProvider>
  );
}

export default App;

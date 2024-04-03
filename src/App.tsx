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
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';

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

  // type Hero = {
  //   id: number;
  //   name: string;
  //   age: number;
  // };

  // const typedNameList: Hero[] = [
  //   { id: 1, name: 'Batman', age: 50 },
  //   { id: 2, name: 'Superman', age: 250 },
  //   { id: 3, name: 'Wonder Woman', age: 200 }
  // ];

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
      {/* <List items={typedNameList} onClick={item => console.log(item)} /> */} {/* For later */}
      <RandomNumber value={23} isPositive />
      <Toast position="center" />
      {/* <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        <div>Primary Button</div>
        To avoid adding anything other than a string content as chldren for example, in Typescript, 'omit' keyword can be used 
        Primary button
      </CustomButton>*/}
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary button
      </CustomButton>
      <CustomInput />
    </ThemeContextProvider>
  );
}

export default App;

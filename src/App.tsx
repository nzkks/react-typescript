import './App.css';
import { Button } from './components/props/Button';
import { Greet } from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Input } from './components/props/Input';
import { Oscar } from './components/props/Oscar';
import { Person } from './components/props/Person';
import { PersonList } from './components/props/PersonList';
import { Status } from './components/props/Status';

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
    <>
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
      <Input value="" handleChange={event => console.log(event)} />
    </>
  );
}

export default App;

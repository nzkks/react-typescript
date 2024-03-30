import './App.css';
import { Greet } from './components/props/Greet';
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
    </>
  );
}

export default App;

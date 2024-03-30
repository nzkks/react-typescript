import './App.css';
import { Greet } from './components/props/Greet';
import { Person } from './components/props/Person';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  };

  return (
    <>
      <Greet name="NZKKS" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
    </>
  );
}

export default App;

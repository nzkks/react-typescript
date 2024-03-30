import './App.css';
import { Greet } from './components/props/Greet';

function App() {
  return (
    <>
      <Greet name="NZKKS" messageCount={20} isLoggedIn={true} />
    </>
  );
}

export default App;

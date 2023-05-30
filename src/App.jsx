import WelcomePrompt from './components/InitialPrompts/WelcomePrompt';
import { useUserRedux } from './hooks/useUserRedux';

function App() {
  const { name } = useUserRedux();

  if(!name || name.trim().length === 0) return <WelcomePrompt/>
  // if(name && )
  return (
    <div className="App">
    asdasdsad
    </div>
  );
}

export default App;

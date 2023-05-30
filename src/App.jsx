import useUserRedux from './hooks/useUserRedux';
import useSettingsRedux from './hooks/useSettingsRedux';
import WelcomePrompt from './components/InitialPrompts/WelcomePrompt';
import LocationPrompt from './components/InitialPrompts/LocationPrompt';


function App() {
  const { name } = useUserRedux();
  const { isGeolocationAllowed } = useSettingsRedux();
  
  if(!name || name.trim().length === 0) return <WelcomePrompt/>
  if(name && isGeolocationAllowed === null) return <LocationPrompt/>

  return (
    <div className="App">
    asdasdsad
    </div>
  );
}

export default App;

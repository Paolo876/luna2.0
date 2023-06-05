import useUserRedux from './hooks/useUserRedux';
import useSettingsRedux from './hooks/useSettingsRedux';
import WelcomePrompt from './components/InitialPrompts/WelcomePrompt';
import LocationPrompt from './components/InitialPrompts/LocationPrompt';
import Background from './components/Background/Background';
import ComponentsList from './components/ComponentsList';
import Settings from './components/Settings/Settings';


function App() {
  const { name } = useUserRedux();
  const { isGeolocationAllowed } = useSettingsRedux();
  
  if(!name || name.trim().length === 0) return <WelcomePrompt/>
  if(name && isGeolocationAllowed === null) return <LocationPrompt/>

  return (
    <div className="App">
      <Background/>
      <Settings/>
      <ComponentsList/>
    </div>
  );
}

export default App;

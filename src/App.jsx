import { useState } from 'react';
import useUserRedux from './hooks/useUserRedux';
import useSettingsRedux from './hooks/useSettingsRedux';
import useUiRedux from './hooks/useUiRedux';
import WelcomePrompt from './components/InitialPrompts/WelcomePrompt';
import LocationPrompt from './components/InitialPrompts/LocationPrompt';
import Background from './components/Background/Background';
import ComponentsList from './components/ComponentsList';
import Settings from './components/Settings/Settings';
import InitialModal from './components/InitialModal/InitialModal';


function App() {
  const { name } = useUserRedux();
  const { isGeolocationAllowed } = useSettingsRedux();
  const { interface: { isInitialLoad } } = useUiRedux();

  const [ showModal, setShowModal ] = useState(isInitialLoad);
  if(!name || name.trim().length === 0) return <WelcomePrompt/>
  if(name && isGeolocationAllowed === null) return <LocationPrompt/>

  return (
    <>
      <Background/>
      <Settings/>
      <ComponentsList/>
      { showModal && <InitialModal showModal={showModal} setShowModal={setShowModal}/> }
    </>
  );
}

export default App;

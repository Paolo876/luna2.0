import React from 'react'
import useSettingsRedux from '../hooks/useSettingsRedux';
import Greeting from './Greeting/Greeting';
import Motivations from './Motivations/Motivations';
import Search from './Search/Search';
import Time from './Time/Time';
import Todos from './Todos/Todos';
import Weather from './Weather/Weather';


const ComponentsList = () => {
  const { toggleGeolocation, components } = useSettingsRedux();

  const checkIsVisible = (name) => {
    const component = components.find(item => item.name === name);
    if(component.isVisible) return true;
    return false; 
  }
  
  // listen for location permission changes
  navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) { 
    permissionStatus.onchange = () => { 
      if(permissionStatus.state === "granted"){
        toggleGeolocation(true)
      } else if(permissionStatus.state === "denied"){
        toggleGeolocation(false)
      } else {
        toggleGeolocation(null)
      }
    }
  });
  return (
    <>
      { checkIsVisible("greeting")            && <Greeting/> }
      { checkIsVisible("motivations")         && <Motivations/> }
      { checkIsVisible("search")              && <Search/> }
      { checkIsVisible("time")                && <Time/> }
      { checkIsVisible("todos")               && <Todos/> }
      { checkIsVisible("weather")             && <Weather/> }
    </>
  )
}

export default ComponentsList
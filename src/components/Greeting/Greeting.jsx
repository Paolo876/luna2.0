import { useRef } from "react";
import ComponentContainer from '../UI/ComponentContainer'
import useUserRedux from '../../hooks/useUserRedux'
import useSettingsRedux from "../../hooks/useSettingsRedux";
import { Typography } from '@mui/material'

const Greeting = () => {
  const ref = useRef();   //for react-draggable
  const { name } = useUserRedux();
  const { components } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "greeting").addedStyles;
  const hours = new Date().getHours();

  let greeting;
  if(hours < 12){
      greeting = 'Good morning';
  } else if(hours >= 12 && hours <= 18){
      greeting = 'Good afternoon';
  } else {
      greeting = 'Good evening';
  }

  return (
    <ComponentContainer 
      additionalStyles={{
        top: "32%",
        background: "radial-gradient(rgba(0, 0, 0, 0.1) 10%, transparent 60%)",
        fontSize: "5em",
        textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
        ...addedStyles
        
      }}
      ref={ref} 
      id="greeting"
      >
      <p>{ `${greeting}, ${name}` }!</p>
      </ComponentContainer>
  )
}

export default Greeting
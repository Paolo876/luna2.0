import { useRef } from "react";
import ComponentContainer from '../UI/ComponentContainer'
import useUserRedux from '../../hooks/useUserRedux'
import useSettingsRedux from "../../hooks/useSettingsRedux";
import { Box } from "@mui/material";

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
        top: {xs: "35%", sm: "32%"},
        fontSize: {xs: "2em", sm: "3em", md: "5em"},
        textAlign: "center",
        textShadow: "1px 1px 2px rgba(0, 0, 0, .8)",
        lineHeight: 1.25,
        ...addedStyles,       
      }}
      ref={ref} 
      id="greeting"
    >
      <p>{ `${greeting}, ${name}` }!</p>
    </ComponentContainer>
  )
}

export default Greeting
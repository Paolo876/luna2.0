import { useRef } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from "../UI/ComponentContainer";


const Todos = () => {
  const ref = useRef();
  const { components, ui } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "todos").addedStyles;
  const { containerColor } = ui;


  return (
    <ComponentContainer
      additionalStyles={{
        
        background: containerColor,
        ...addedStyles
      }}
      ref={ref} 
      id="todos"
    >
    
    </ComponentContainer>
  )
}

export default Todos
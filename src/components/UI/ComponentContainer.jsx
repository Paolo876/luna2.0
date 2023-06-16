import React from "react";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useUiRedux from "../../hooks/useUiRedux";
import getTranslateValue from "../../utils/get-translate-value";


const ComponentContainer = (props, ref) => {
  const { editorMode: { isActive }, changeComponentPosition, components } = useSettingsRedux();
  const { interface: { primaryColor } } = useUiRedux();
  const handleStop = () => {
    changeComponentPosition({id: ref.current.id, transform: ref.current.style.transform})
  }

  let defaultPosition = undefined;
  if(isActive){
      const componentStyles = components.find(item => item.name === ref.current.id).addedStyles
      if(componentStyles.transform){
          defaultPosition = getTranslateValue(componentStyles.transform);
      }
  }

  const content = (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        zIndex: 1,
        textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        ...props.additionalStyles
      }}
      onClick={props.onClick} 
      ref={ref}
      id={props.id}
    >
      {isActive && <Box 
        sx={{
          position: "absolute",
          backgroundColor: "rgba(20, 20, 20, .25)",
          height: "100%",
          width: "100%",
          cursor: "grab",
          zIndex: 10,
          border: `2px dotted ${primaryColor}`,
        }} 
        ></Box>}
      {props.children}
    </Box>
  )


  return (
    <>
      {isActive ? 
        <Draggable      
          position={null} 
          nodeRef={ref} 
          onStop={handleStop}
          defaultPosition={defaultPosition}
          bounds={{   
            top: (ref.current.offsetTop * -1), 
            left: (ref.current.offsetLeft * -1), 
            right: window.innerWidth - (ref.current.offsetLeft + ref.current.offsetWidth), 
            bottom: window.innerHeight - (ref.current.offsetTop + ref.current.offsetHeight) 
          }}
        >
          {content}
        </Draggable>
      :
          <>{content}</>
      }
  </>
  )
}

export default React.forwardRef(ComponentContainer); 
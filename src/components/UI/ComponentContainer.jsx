import React from "react";
import Draggable from "react-draggable";
import { Box } from "@mui/material";
import { useSettingsRedux } from "../../../../luna/src/hooks/useSettingsRedux";

import getTranslateValue from "../../../../luna/src/utils/get-translate-value";


const ComponentContainer = (props, ref) => {
  const { uiSettings: { primaryColor, }, } = useSettingsRedux();
  const handleStop = () => {
    
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
        zIndex: 1,
        textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        ...props.additionalStyles
      }}
      onClick={props.onClick} 
      ref={ref}
      id={props.id}
    >
      {editorModeIsActive && <Box 
        sx={{
          position: "absolute",
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
          cursor: "grab",
          zIndex: 10,
          border: `1px dotted ${primaryColor}`,
        }} 
        ></Box>}
      {props.children}
    </Box>
  )
  return (
    <>
      {editorModeIsActive ? 
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
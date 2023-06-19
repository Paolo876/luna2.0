import React from "react";
import Draggable from "react-draggable";
import { Box, Fab, IconButton, Typography } from "@mui/material";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useUiRedux from "../../hooks/useUiRedux";
import getTranslateValue from "../../utils/get-translate-value";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


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
          console.log(componentStyles)
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
          height: "100%",
          width: "100%",
          cursor: "grab",
          zIndex: 10,
          border: `2px dotted ${primaryColor}`,
        }}
        >
          {/* resize actions */}
          <Box 
            sx={{
              background: "rgba(255,255,255, .5)",
              backdropFilter: "blur(5px) brightness(120%)", 
              display: "flex", 
              width: "fit-content", 
              position: "absolute", 
              right: 0, 
              top: 0, 
              py: .35, 
              px: 1, 
              gap :2
            }}
          >
            <Typography variant="body2" fontSize={12} letterSpacing={.5}>Resize</Typography>
            <Box sx={{display: "flex", gap: .75}}>
              <Fab  size='small' sx={{height: 16, minHeight: "initial"}} color="secondary" variant="extended"><RemoveIcon fontSize="inherit"/></Fab>
              <Fab  size='small' sx={{height: 16, minHeight: "initial"}} color="primary" variant="extended"><AddIcon fontSize="inherit"/></Fab>
            </Box>
          </Box>
        </Box>}
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
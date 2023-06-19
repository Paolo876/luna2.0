import React from "react";
import Draggable from "react-draggable";
import { Box, Fab } from "@mui/material";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useUiRedux from "../../hooks/useUiRedux";
import getTranslateValue from "../../utils/get-translate-value";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ComponentContainer = (props, ref) => {
  const { editorMode: { isActive }, changeComponentPosition, changeComponentScaling, components } = useSettingsRedux();
  const { interface: { primaryColor } } = useUiRedux();

  const handleStop = (e) => {
    e.stopPropagation()
    console.log(ref.current.id)
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


  const handleResizeClick = ({action, e}) => {
    // ref.current.style.transform = "none"
    changeComponentScaling({id: ref.current.id, action})
    e.stopPropagation()
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
        textShadow: "1px 1px 2px rgba(0, 0, 0, .75)",
        ...props.additionalStyles
      }}
      onClick={props.onClick} 
      ref={ref}
      id={props.id}
    >
      {isActive && <>
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            cursor: "grab",
            zIndex: 10,
            border: `2px dashed ${primaryColor}`,
            boxShadow: 24,
          }}
        ></Box>
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
            height: "fit-content",
            py: .75, 
            px: .75, 
            gap: 1,
            zIndex: 12,
          }}
        >              
          <Fab size='small' sx={{height: 18, width: 18, minHeight: "initial"}} color="warning" variant="circular" onClick={(e) => handleResizeClick({action:"down", e})}><RemoveIcon fontSize="inherit"/></Fab>
          <Fab size='small' sx={{height: 18, width: 18, minHeight: "initial"}} color="secondary" variant="circular" onClick={(e) => handleResizeClick({action:"up", e})}><AddIcon fontSize="inherit"/></Fab>
        </Box>
      </>}
        {props.children}
    </Box>
  )
  // console.log(defaultPosition)


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
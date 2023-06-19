import React, { useState } from "react";
import Draggable from "react-draggable";
import { Box, Button, ButtonGroup, Fab, IconButton } from "@mui/material";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useUiRedux from "../../hooks/useUiRedux";
import getMatrixValues from "../../utils/getMatrixValues";
// import getTranslateValue from "../../utils/get-translate-value";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ComponentContainer = (props, ref) => {
  const { editorMode: { isActive }, changeComponentPosition, changeComponentScaling, components } = useSettingsRedux();
  const { interface: { primaryColor } } = useUiRedux();
  const [ showScaleActions, setShowScaleActions ] = useState(true);
  const handleStop = (e) => {
    setShowScaleActions(true)
    changeComponentPosition({id: ref.current.id, transform: getComputedStyle(ref.current).transform})
  }

  let defaultPosition = undefined;
  if(isActive){
      const componentStyles = components.find(item => item.name === ref.current.id).addedStyles
      if(componentStyles.transform){
          const matrixValues = getMatrixValues(componentStyles.transform)
          defaultPosition = { x : matrixValues.translateX, y: matrixValues.translateY};

      }
  }


  const handleResizeClick = ({action, e}) => {
    // ref.current.style.transform = "none"
    changeComponentScaling({id: ref.current.id, transform: getComputedStyle(ref.current).transform, action})
    e.stopPropagation()
  }

  let rectPosition = {};
  if(ref.current) {
    rectPosition.left = ref.current.getBoundingClientRect().left
    rectPosition.width = ref.current.getBoundingClientRect().width
    rectPosition.top = ref.current.getBoundingClientRect().top
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
      {isActive && ref.current &&
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          cursor: "grab",
          zIndex: 10,
          border: `2px dashed ${primaryColor}`,
          boxShadow: 2,
          transition: "all 200ms ease-in-out",
          "&:hover": {
            background: "rgba(255,255,255,0.25)",
            border: `1px dashed ${primaryColor}`,

            boxShadow: 10,
          }
        }}
      ></Box>}
        {props.children}
    </Box>
  )


  return (
    <>
      {isActive ? 
        <>
        <Draggable      
          position={null} 
          nodeRef={ref} 
          onStop={handleStop}
          onDrag={() => setShowScaleActions(false)}
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
        {showScaleActions && <Box sx={{
          width: 50,
          position: "absolute",
          zIndex: 20,
          top: `${rectPosition.top}px`,
          left: `${rectPosition.left + rectPosition.width - 50}px`,
        }}>
        {/* resize actions */}
        <ButtonGroup
          disableElevation
          variant="contained"
          size="small"
          sx={{
            background: "rgba(255,255,255, .5)",
            backdropFilter: "blur(5px) brightness(110%)", 
            display: "flex", 
            width: "fit-content", 
            position: "absolute", 
            right: 0, 
            top: 0, 
            height: "fit-content",
            boxShadow: 2,
            zIndex: 12,
            opacity: .95,
            transition: "all 150ms ease-in-out",
            "&:hover": {
              opacity: 1,
              transform: "scale(1.02)",
              boxShadow: 10,

            }
          }}
        >
          <Button size="small" color="warning"><RemoveIcon fontSize="inherit"/></Button>
          <Button size="small" color="success"><AddIcon fontSize="inherit"/></Button>
        </ButtonGroup>
        {/* <Box 
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
        </Box> */}
        </Box>}
        </>
      :
        <>{content}</>
      }
  </>
  )
}

export default React.forwardRef(ComponentContainer); 

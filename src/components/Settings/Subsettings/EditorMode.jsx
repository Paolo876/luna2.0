import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Typography, Box, Button } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const EditorMode = () => {


  const handleClick = () => {
    let isAtMaxWidth = (window.screen.availWidth - window.innerWidth) === 0;
    let isAtMaxHeight = (window.screen.availHeight - window.outerHeight <= 1);


    if(isAtMaxWidth && isAtMaxHeight) {
      alert('Browser is in fullscreen')
    }
  }

  return (
    <SubsettingContainer title="Editor Mode">
      <Box>
        <Typography variant="body2">
          Editor Mode allows you to change the position and sizing of each components to your desired preference. 
        </Typography>
        <Typography variant="body2">
          Note: Please make sure that the window is in Fullscreen or Maximized in order to enable editor mode.
        </Typography>
      </Box>
      <Box>
        <Button 
          onClick={() => handleClick()}
          variant="contained" 
          endIcon={<AutoAwesomeIcon fontSize="small" sx={{color: "rgba(245, 205, 79, 1)"}}/>}
        >
          Enter Editor Mode
        </Button>
      </Box>
    </SubsettingContainer>
  )
}

export default EditorMode
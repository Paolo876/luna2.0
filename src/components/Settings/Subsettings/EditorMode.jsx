import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Typography, Box } from '@mui/material'


const EditorMode = () => {
  return (
    <SubsettingContainer title="Editor Mode">
      <Box>
        <Typography variant="body2">
          Editor Mode allows you to change the position and sizing of each components to your desired preference. 
        <Typography variant="body2">
          Please make sure that the window is in Fullscreen/Maximized in order to enable editor mode.
        </Typography>
        </Typography>
      </Box>
    </SubsettingContainer>
  )
}

export default EditorMode
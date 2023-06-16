import React from 'react'
import { styled } from '@mui/material/styles';
import { Badge, Box, IconButton, Button, Fab, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


const buttonAnimation = {
  border: "50%",
  color: 'primary.main',
  '&::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: 'ripple 1.2s infinite ease-in-out',
    border: '1px solid currentColor',
    content: '""',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.8)',
      opacity: 0,
    },
  },
};


const EditorModeActions = () => {
  return (
    <Box sx={{position: "absolute", left: 0, bottom: 0, zIndex: 20, background: "rgba(0,0,0,0.05)", py: 2, pr: 5, pl: 2, borderRadius: 5, boxShadow: 2 }}>
      <Typography variant="h4" fontSize={15} mb={2.5} fontWeight={300} sx={{opacity: .8}}>Editor Mode Actions</Typography>
      <Box sx={{display: "flex", flexDirection: "row", gap: 4, }}>
        <Tooltip title="Reset Component Positions" arrow placement='bottom' enterDelay={500}>
          <Fab variant="circular" color="error" size='small'  sx={{height: 45, width: 45, opacity: .75}}>
            <Typography variant="body2" fontSize={11}>Reset</Typography>
          </Fab>
        </Tooltip>

        <Tooltip title="Cancel" arrow placement='bottom' enterDelay={500}>
          <Fab variant="circular" size='small' sx={{height: 45, width: 45, opacity: .75}}>
            <ClearIcon />
          </Fab>
        </Tooltip>

        <Box sx={{position: "relative", p:0, m: 0}}>
          <Box sx={buttonAnimation}>
            <Tooltip title="Save Changes" arrow placement='bottom' enterDelay={500}>
              <Fab variant="circular" color="primary" size='small' sx={{height: 45, width: 45}}>
                <CheckIcon />
              </Fab>
            </Tooltip>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default EditorModeActions
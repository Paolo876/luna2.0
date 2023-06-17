import React from 'react'
import useSettingsRedux from '../../hooks/useSettingsRedux';
import { useSnackbar } from 'notistack';
import { Box, Fab, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CachedIcon from '@mui/icons-material/Cached';


const buttonAnimation = {
  border: "50%",
  color: 'success.main',
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
      transform: 'scale(1.6)',
      opacity: 0,
    },
  },
};


const EditorModeActions = ({ setShowSettings }) => {
  const { saveComponentPositions, toggleEditorMode, resetComponentPositions } = useSettingsRedux();
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = (action) => {
    setShowSettings(false)
    if(action === "save") {
      saveComponentPositions()
      enqueueSnackbar('Component Positions updated!', { variant: "success" })
    }
    if(action === "cancel") toggleEditorMode(false)
    if(action === "reset") {
      resetComponentPositions()
      enqueueSnackbar('Component Positions Reset to Default!', { variant: "warning" })
    }
  }

  
  return (
    <Box sx={{position: "absolute", left: 0, bottom: 0, zIndex: 20, py: 2, pr: 6, pl: 2, borderRadius: 5, boxShadow: 5, backdropFilter: "blur(5px) brightness(120%)" }}>
      <Typography variant="h4" fontSize={14} mb={3.5} fontWeight={300} sx={{opacity: .8}}>Editor Mode Actions</Typography>
      <Box sx={{display: "flex", flexDirection: "row", gap: 2.5, alignItems: "center" }}>
        <Tooltip title="Reset Positions" arrow placement='bottom' enterDelay={500}>
          <Fab variant="circular" color="error" size='small'  sx={{height: 36, width: 36, opacity: .7}} onClick={() => handleClick("reset")}>
            <CachedIcon/>
          </Fab>
        </Tooltip>

        <Tooltip title="Cancel" arrow placement='bottom' enterDelay={500}>
          <Fab variant="circular" size='small' sx={{height: 36, width: 36, opacity: .7}} onClick={() => handleClick("cancel")}>
            <ClearIcon />
          </Fab>
        </Tooltip>

        <Box sx={{position: "relative", p:0, m: 0, ml: 2.5}}>
          <Box sx={buttonAnimation}>
            <Tooltip title="Save Changes" arrow placement='bottom' enterDelay={500}>
              <Fab variant="circular" color="success" size='small' sx={{height: 42, width: 42}} onClick={() => handleClick("save")}>
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
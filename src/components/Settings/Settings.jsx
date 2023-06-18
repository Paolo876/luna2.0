import { useState } from 'react'
import useSettingsRedux from '../../hooks/useSettingsRedux';
import useUiRedux from '../../hooks/useUiRedux';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Modal, Box, Fade } from '@mui/material';
import SettingsList from './SettingsList';
import EditorModeActions from './EditorModeActions';

const buttonAnimation = {
  border: "50%",
  '&::after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: 'ripple 800ms infinite ease-in-out',
    border: '5px solid rgb(255, 249, 135)',
    content: '""',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.3)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0,
    },
  },
};

const iconStyles = {
  position: 'absolute',
  bottom: 10,
  left: 10,
  transition: '250ms all ease-in-out',
  lineHeight: 1,
  zIndex: 3,
  color: "white",
  background: "radial-gradient(rgba(0, 0, 0, .25) 0%, transparent 70%)",
  backdropFilter: "blur(.75px)",
  textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
};


const Settings = () => {
  const { editorMode: { isActive } } = useSettingsRedux();
  const [ showSettings, setShowSettings ] = useState(false);
  const { interface: { isInitialLoad }, closeInitialModal } = useUiRedux();

  const updatedIconStyles = isInitialLoad ? { ...iconStyles, ...buttonAnimation} : iconStyles;

  const handleClick = () => {
    if(isInitialLoad) closeInitialModal();
    setShowSettings(prevState => !prevState)
  }
  return (
    <>
      {
        isActive ? 
          <EditorModeActions setShowSettings={setShowSettings}/>
          :
          <>
            <IconButton
              onClick={handleClick}
              sx={{
                ...updatedIconStyles,
                transform: showSettings ? "rotate(90deg)" : "rotate(-30deg)",
                opacity: showSettings ? .65 : 1,
              }}
              size='small'
            >
              <SettingsIcon sx={{fontSize: 30}}/>
            </IconButton>
            <Modal
              open={showSettings}
              onClose={ () => setShowSettings(false) }
              closeAfterTransition
              slotProps={{
                backdrop: {
                  timeout: 200,
                  sx: {
                    background: "rgba(0,0,0,0.0)"
                  }
                }
              }}
            >
              <Fade in={showSettings} timeout={200}>
                <Box>
                  <SettingsList/>
                </Box>
              </Fade>
            </Modal>
          </>

      }
    </>
  )
}

export default Settings
import { useState } from 'react'
import useSettingsRedux from '../../hooks/useSettingsRedux'
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Modal, Box, Fade } from '@mui/material';
import SettingsList from './SettingsList';


const Settings = () => {
  const { editorMode: { isActive } } = useSettingsRedux();
  const [ showSettings, setShowSettings ] = useState(false);


  return (
    <>
      {
        isActive ? 
          <>

          </> :
          <>
            <IconButton
              onClick={() => setShowSettings(prevState => !prevState)}
              sx={{
                position: 'absolute',
                bottom: 5,
                left: 5,
                transition: '250ms all ease-in-out',
                lineHeight: 1,
                zIndex: 3,
                color: "#ebebeb",
                background: "radial-gradient(rgba(0, 0, 0, .25) 0%, transparent 70%)",
                backdropFilter: "blur(.75px)",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
                transform: showSettings ? "rotate(90deg)" : "initial",
                opacity: showSettings ? .65 : 1,
                
              }}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <SettingsIcon sx={{fontSize: 28}}/>
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
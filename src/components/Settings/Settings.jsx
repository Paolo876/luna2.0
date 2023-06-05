import { useState } from 'react'
import useSettingsRedux from '../../hooks/useSettingsRedux'
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Modal } from '@mui/material';
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
                transition: '.45s all ease-in-out',
                lineHeight: 1,
                zIndex: 3,
                color: "#ebebeb",
                background: "radial-gradient(rgba(0, 0, 0, 0.1) 10%, transparent 60%)",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
                transform: showSettings ? "rotate(100deg)" : "initial"
              }}
            >
              <SettingsIcon/>
            </IconButton>
            <Modal
              open={showSettings}
              onClose={() => setShowSettings(false)}
              slotProps={{
                backdrop: {
                  sx: {
                    background: "transparent"
                  }
                }
              }}
            >
              <SettingsList/>

            </Modal>
          </>

      }
    </>
  )
}

export default Settings
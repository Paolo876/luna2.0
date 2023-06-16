import { useState } from 'react';
import useSettingsRedux from "../../../hooks/useSettingsRedux";
import SubsettingContainer from './SubsettingContainer';
import { Typography, Box, Button, Modal, Paper } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const EditorMode = () => {
  const { toggleEditorMode } = useSettingsRedux();
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = () => {
    let isAtMaxWidth = (window.screen.availWidth - window.innerWidth) === 0;
    let isAtMaxHeight = (window.screen.availHeight - window.outerHeight <= 1);

    if(isAtMaxWidth && isAtMaxHeight) {
      toggleEditorMode(true)
    } else {
      setShowModal(true)
    }
  }

  return (
    <SubsettingContainer title="Editor Mode">
      <Box >
        <Typography variant="body2" fontSize={13.5}>
          Editor Mode allows you to change the position and sizing of each components to your desired preference. 
        </Typography>
        <Typography variant="body2" sx={{opacity: .8, mt: 1, fontSize: 13, }}>
          Note: Please make sure that the window is maximized in order to enable editor mode.
        </Typography>
      </Box>
      <Box sx={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Button 
          onClick={() => handleClick()}
          variant="contained" 
          endIcon={<AutoAwesomeIcon fontSize="small" sx={{color: "rgba(245, 205, 79, 1)"}}/>}
          size="large"
          color="secondary"
        >
          Enter Editor Mode
        </Button>
      </Box>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="editor-mode-error-modal"
        aria-describedby="editor-mode-error"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            border: 0,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255, .9)"
          }}
          align="center"
        >
          <Typography variant="h6" fontSize={20} color="error.main" align='center' letterSpacing={.25}>Note: Please make sure that the window is maximized in order to enable editor mode.</Typography>
          <Box>
            <Button variant="contained" onClick={() => setShowModal(false)}>Close</Button>
          </Box>
        </Paper>
      </Modal>
    </SubsettingContainer>
  )
}

export default EditorMode
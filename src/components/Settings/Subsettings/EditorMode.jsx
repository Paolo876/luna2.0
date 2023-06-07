import { useState } from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Typography, Box, Button, Modal, Paper } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const EditorMode = () => {
  const [ showModal, setShowModal ] = useState(false)

  const handleClick = () => {
    let isAtMaxWidth = (window.screen.availWidth - window.innerWidth) === 0;
    let isAtMaxHeight = (window.screen.availHeight - window.outerHeight <= 1);

    setShowModal(true)
    // if(isAtMaxWidth && isAtMaxHeight) {
    //   alert('Browser is in fullscreen')
    // } else {
    //   setShowModal(true)
    // }
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
      <Box align="center" mt={8}>
        <Button 
          onClick={() => handleClick()}
          variant="contained" 
          endIcon={<AutoAwesomeIcon fontSize="small" sx={{color: "rgba(245, 205, 79, 1)"}}/>}
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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            background: "rgba(250,250,250,.95)",
            // bgcolor: 'warning.light',
            // border: 'none',
            border: 3,
            borderColor: "warning.light",
            boxShadow: 24,
            p: 4,
          }}
          align="center"
        >
          <Typography color="warning.dark" variant="body1" fontWeight={500} fontFamily="Roboto">Note: Please make sure that the window is maximized in order to enable editor mode.</Typography>
          <Box mt={4}>
            <Button variant="contained" onClick={() => setShowModal(false)}>Close</Button>
          </Box>
        </Paper>
      </Modal>
    </SubsettingContainer>
  )
}

export default EditorMode
import { useState } from 'react'
import SubsettingContainer from "./SubsettingContainer"
import { Typography, Box, Button, Modal, Paper } from '@mui/material'
import useSettingsRedux from '../../../hooks/useSettingsRedux'


const Reset = () => {
  const { clearAllSettings } = useSettingsRedux();
  const [ showModal, setShowModal ] = useState(false)


  return (
    <SubsettingContainer title="Reset All Settings">
      <Box mt={1}>
        <Typography variant="body2" fontSize={16}> 
          <Box component="span" color="warning.main" fontWeight={600}>WARNING: </Box>
          This will clear and reset all the data and information saved in the system. 
          The page will reload upon confirmation and all settings and preferences will be set back to default.
        </Typography>
      </Box>
      <Box sx={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Button variant="contained" color="error" onClick={() => setShowModal(true)} size="large">Reset All Settings</Button>
      </Box>
      <Modal
        open={showModal}
        onClose={ () => setShowModal(false) }
      >

        <Paper
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: "95vw", sm: 500, md: 600, lg: 650},
            border: 0,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30,30,30, .96)",
          }}
        >
        <Box sx={{width: "100%", textAlign: "center"}}>
          <Typography variant="h4" fontSize={21} align='center' letterSpacing={.25} mb={1.5}> 
            Are you sure you want to reset all settings to default?
          </Typography>
          <Typography variant="body2" sx={{opacity: .75}}>Local cache and states will be cleared. Page will reload upon confirmation.</Typography>

        </Box>
          <Box sx={{display: "flex", gap: 6, }}>
            <Button color="error" variant="contained" size="large" sx={{letterSpacing: 1, fontWeight: 600}} onClick={() => clearAllSettings()}>Confirm</Button>
            <Button color="secondary" variant="outlined" size="large" sx={{letterSpacing: 1, fontWeight: 600}} onClick={() => setShowModal(false)}>Cancel</Button>
          </Box>
        </Paper>
      </Modal>
    </SubsettingContainer>
  )
}

export default Reset
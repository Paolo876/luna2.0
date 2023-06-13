import React from 'react'
import SubsettingContainer from "./SubsettingContainer"
import { Typography, Box, Button } from '@mui/material'
import useSettingsRedux from '../../../hooks/useSettingsRedux'


const Reset = () => {
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
        <Button variant="contained" color="error">Reset All Settings</Button>
      </Box>
    </SubsettingContainer>
  )
}

export default Reset
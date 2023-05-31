import React from 'react'
import { Button, Typography, Box } from '@mui/material'
import "./LocationPrompt.scss"
import useSettingsRedux from '../../hooks/useSettingsRedux'

const LocationPrompt = () => {
  const { toggleGeolocation } = useSettingsRedux();

  const handleClick = () => {
    const showPosition = () => {
        toggleGeolocation(true)
    }
    const showError = (err) => {
        if(err.code === 1) toggleGeolocation(false)
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }

  return (
    <Box className="location-prompt">
      <Typography variant="h5">This app uses the browser's built-in geolocation API to display an accurate weather information.</Typography>
      <Typography variant="body1" fontSize={18} mt={5} sx={{opacity: .8}}>Click the button below to trigger the browser's location prompt and choose 'Allow' if you wish to use this feature or 'Block' otherwise.</Typography>
      <Typography variant="body2" color="info.light" fontStyle="italic" mt={1}>Weather component will be disabled if location is blocked.</Typography>

      <Box mt={6}>
        <Button variant="contained" onClick={handleClick} size="large">Click Here To Continue</Button>
      </Box>
    </Box>  
  )
}

export default LocationPrompt
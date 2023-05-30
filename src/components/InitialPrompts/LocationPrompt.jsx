import React from 'react'
import { Button, Typography, Box } from '@mui/material'
import "./LocationPrompt.scss"


const LocationPrompt = () => {

  const handleClick = () => {
    // const clickHandler = () => {
    //   const showPosition = () => {
    //       dispatch(settingsActions.toggleGeolocation(true))
    //   }
    //   const showError = (err) => {
    //       if(err.code === 1) dispatch(settingsActions.toggleGeolocation(false))
    //   }

    //   if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition, showError);
    //   }
    // }
  }

  return (
    <Box className="location-prompt">
      <Typography variant="h3">This app uses the browser's built-in geolocation API to display an accurate weather information.</Typography>
      <Typography variant="body1">Click the button below to trigger the browser's location prompt and choose 'Allow' if you wish to use this feature or 'Block' otherwise.</Typography>
      <Typography variant="body2">Weather component will be disabled if location is blocked.</Typography>

      <Box>
        <Button variant="contained" onClick={handleClick}>Click Here To Continue</Button>
      </Box>
    </Box>  
  )
}

export default LocationPrompt
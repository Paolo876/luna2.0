import React from 'react'
import "./LocationPrompt.scss"
import { Button, Typography } from '@mui/material'


const LocationPrompt = () => {
  return (
    <Box className="location-prompt">
      <Typography variant="h3">This app uses the browser's built-in geolocation API to display an accurate weather information.</Typography>
      <Typography variant="body1">Click the button below to trigger the browser's location prompt and choose 'Allow' if you wish to use this feature or 'Block' otherwise.</Typography>
      <Typography variant="body2">Weather component will be disabled if location is blocked.</Typography>

      <Box>
        <Button>Click Here To Continue</Button>
      </Box>
    </Box>  
  )
}

export default LocationPrompt
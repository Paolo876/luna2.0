import React from 'react'
import { Button, Typography, Box, Fade } from '@mui/material'
import "./LocationPrompt.scss"
import useSettingsRedux from '../../hooks/useSettingsRedux'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'mui-image';
import logo from "../../assets/logo.png"


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
        <Fade appear={true} in={true} timeout={{ enter: 300, exit: 300 }}>
        
          <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "75vw", pb: "5%"}}>
            <Box pb={10} mx="auto" px="auto">
              <Image src={logo} height={250} width={250} duration={0} />
            </Box>
            <Typography variant="h4">This app uses the browser's built-in geolocation API to display an accurate weather information.</Typography>
            <Typography variant="body2" fontSize={18} mt={15} sx={{opacity: .9}}>Click the button below to trigger the browser's location prompt and choose 'Allow' if you wish to use this feature or 'Block' otherwise.</Typography>
            <Typography variant="body2" color="info.light" mt={1} sx={{opacity: .8}} fontSize={15}>
              Weather component will be disabled if location is blocked.
            </Typography>
            <Box mt={6}>
              <Button endIcon={<ArrowForwardIosIcon/>} size="large" variant="outlined" sx={{fontWeight: 600, letterSpacing: 1.5, fontSize: 18, px: 6, py: 1.5}} onClick={handleClick}>Continue</Button>
            </Box>
          </Box>
        </Fade>
      </Box>  

  )
}

export default LocationPrompt
import React from 'react'
import Image from 'mui-image'
import SubsettingContainer from './SubsettingContainer'
import logo from "../../../assets/logo.png"
import { Box, Typography } from '@mui/material'

const listItemStyle = {
  fontFamily: "Questrial", 
  fontSize: 13.5, 
  letterSpacing: .75, 
  opacity: .9,
  py: .3,
}

const About = () => {
  return (
    <SubsettingContainer title="About">
      <Box mb={5} sx={{display: "flex", alignItems: "flex-end", gap: 3}}>
        <Image src={logo} height={85} width={85} duration={400}/>
        <Box>
        <Typography variant="h4" fontSize={12}>Designed and developed by Paolo Bugarin</Typography>
        </Box>
      </Box>
      <Box mb={4}>
        <Typography variant="h4" fontSize={16} mb={1}>Description</Typography>

        <Typography variant="body2" sx={{lineHeight: 1.3}}>
          Luna is a personalizable browser homepage alternative inspired by the google chrome extension 'Momentum'. 
          It features a beautiful UI that can be customized by the user through a variety of options.
        </Typography>
      </Box>
      <Box>
      <Typography variant="h4" fontSize={16} mb={1}>Technologies & APIs Used</Typography>
        <Box component="ul" sx={{listStyleType: "circle", listStyle: "inside", mb: 2, ml: .25}}>
          <Box component="li" sx={listItemStyle}>ReactJS</Box>
          <Box component="li" sx={listItemStyle}>React-Redux (ReduxJSToolkit)</Box>
          <Box component="li" sx={listItemStyle}>React-Draggable</Box>
          <Box component="li" sx={listItemStyle}>Material-UI</Box>
          <Box component="li" sx={listItemStyle}>Axios</Box>
          <Box component="li" sx={listItemStyle}>Notistack</Box>
          <Box component="li" sx={listItemStyle}>Firebase</Box>
          <Box component="li" sx={listItemStyle}>Imagekitio-react</Box>
          <Box component="li" sx={listItemStyle}>mui-color-input</Box>
          <Box component="li" sx={listItemStyle}>Sass/Scss</Box>
          <Box component="li" sx={listItemStyle}>Picsum.photos API</Box>
          <Box component="li" sx={listItemStyle}>Openweathermap API</Box>
          <Box component="li" sx={listItemStyle}>Real-Inspire API by Mohamad Ayash</Box>
        </Box>
      </Box>
    </SubsettingContainer>
  )
}

export default About
import React from 'react'
import Image from 'mui-image'
import SubsettingContainer from './SubsettingContainer'
import logo from "../../../assets/logo.png"
import { Box, Typography } from '@mui/material'

const listItemStyle = {
  fontFamily: "Questrial", 
  fontSize: 13.5, 
  letterSpacing: .5, 
  opacity: .9,
  py: .3,
}

const About = () => {
  return (
    <SubsettingContainer title="About">
      <Box mb={5} sx={{display: "flex", alignItems: "flex-end", gap: 3}}>
        <Image src={logo} height={90} width={90} duration={0}/>
        <Box>
        <Typography variant="h4" fontSize={12}>Designed and developed by Paolo Bugarin</Typography>
        </Box>
      </Box>
      <Box mb={4}>
        <Typography variant="h4" fontSize={16} mb={1}>Description</Typography>

        <Typography variant="body2">
          Luna is a personalizable browser homepage alternative inspired by the google chrome extension 'Momentum'. 
          It features a UI that the user can freely customize through rearranging the components, elements positioning, font properties, and UI color scheme.
        </Typography>
      </Box>
      <Box>
      <Typography variant="h4" fontSize={16} mb={2}>Technologies & APIs Used</Typography>
        <Box component="ul" sx={{listStyleType: "circle", listStyle: "inside", mb: 2, ml: .25}}>
          <Box component="li" sx={listItemStyle}>ReactJS</Box>
          <Box component="li" sx={listItemStyle}>React-Redux (ReduxJSToolkit)</Box>
          <Box component="li" sx={listItemStyle}>React-Draggable</Box>
          <Box component="li" sx={listItemStyle}>Material-UI</Box>
          <Box component="li" sx={listItemStyle}>Axios</Box>
          <Box component="li" sx={listItemStyle}>Imagekitio-react</Box>
          <Box component="li" sx={listItemStyle}>mui-color-input</Box>
          <Box component="li" sx={listItemStyle}>Sass/Scss</Box>
          <Box component="li" sx={listItemStyle}>Unsplash API</Box>
          <Box component="li" sx={listItemStyle}>Openweathermap API</Box>
          <Box component="li" sx={listItemStyle}>Quotable API by Luke Peavey</Box>
        </Box>
      </Box>
    </SubsettingContainer>
  )
}

export default About
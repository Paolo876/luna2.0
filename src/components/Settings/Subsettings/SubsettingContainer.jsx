import React from 'react'
import { Box, Divider, Typography } from '@mui/material'


const SubsettingContainer = ({ children, title }) => {
  return (
    <Box 
      sx={{
        height: "100%",
        width: "100%",
        p: 1,
        background: "rgba(110,110,110,.05)"
      }}
    >
      <Box>
        <Typography 
          variant="h6" 
          sx={{
            fontFamily: "Lato",
            letterSpacing: .5,
            fontSize: 20,
            fontWeight: 400,
          }}
          mb={.5}
        >
          {title}
        </Typography>
        <Divider  sx={{borderColor: "rgba(180,180,180,.1)"}}/>

      </Box>
      {children}
    </Box>
  )
}

export default SubsettingContainer
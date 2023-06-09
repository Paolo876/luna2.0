import React from 'react'
import { Box, Divider, Typography } from '@mui/material'


const SubsettingContainer = ({ children, title }) => {
  return (
    <Box 
      sx={{
        height: "100%",
        // width: "100%",
        // maxWidth: 400,
        px: 1.25,
        py: 2,
        // background: "red"
        // background: "rgba(110,110,110,.05)",
      }}
    >
      <Box>
        <Typography 
          variant="h6" 
          sx={{
            fontFamily: "Lato",
            letterSpacing: .5,
            fontSize: 22,
            fontWeight: 400,
            opacity: .9,
          }}
          pb={.25}
        >
          {title}
        </Typography>
        <Divider  sx={{borderColor: "rgba(180,180,180,.1)"}}/>

      </Box>
      <Box
        sx={{
          mt: 1,
          pt: 2,
          pr: 1.5,
          overflowY: "auto",
          height: 400
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default SubsettingContainer
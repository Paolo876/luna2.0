import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Box, Typography, ButtonBase, Tooltip, IconButton } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const Contact = () => {
  return (
    <SubsettingContainer title="Contact">
      <Box mb={5} mt={2}>
        <Typography 
          variant="h4" 
          sx={{letterSpacing: 1.75, fontWeight: 600, fontSize: 18}}
        >
          Paolo Bugarin
        </Typography>
        <Typography variant="body2" sx={{ letterSpacing: 1, opacity: .75, mt: .75, fontSize: 14.5 }}>Los Angeles, CA <PlaceIcon sx={{fontSize: "inherit"}} color="primary"/></Typography>
      </Box>
      <Box mb={5}>
        <Typography variant="h4" sx={{letterSpacing: 1, fontWeight: 100, opacity: .9, fontSize: 15}}>Email</Typography>
        <ButtonBase target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={{ px:1 }} draggable={false}>
          <Typography variant="h6" sx={{letterSpacing: .5, opacity: 1, fontWeight: 500, fontSize: 16, mt: 1 }} color="primary">paolopaolobugarin@gmail.com</Typography>
        </ButtonBase>      
      </Box>
      <Box mb={5}>
        <Typography variant="h4" sx={{letterSpacing: 1, fontWeight: 100, opacity: .9, fontSize: 15}}>Phone</Typography>
        <ButtonBase href="tel:3234817852" sx={{ px:1 }} draggable={false}>
          <Typography variant="body1" sx={{letterSpacing: .5, opacity: 1, fontWeight: 500, fontSize: 16, mt: 1 }} color="primary">+1 (323) 481 7852</Typography>
        </ButtonBase>      
      </Box>
      <Box>
        <Typography variant="h4" sx={{letterSpacing: 1, fontWeight: 100, opacity: .9, fontSize: 15}}>Social</Typography>
        <Box sx={{display: "flex", gap: 3, flexDirection: "row", width: "100%", mt: 1.75, pl: 1}}>
          <Tooltip title="Github" arrow enterDelay={500} placement="bottom">
            <IconButton draggable={false} size="small" target="_blank" href="https://github.com/Paolo876" sx={{mixBlendMode: "difference"}} disableTouchRipple>
              <GitHubIcon fontSize="medium" color="primary"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow enterDelay={500} placement="bottom">
            <IconButton draggable={false} size="small" target="_blank" href="https://www.linkedin.com/in/paolo-bugarin/" sx={{mixBlendMode: "difference"}} disableTouchRipple>
              <LinkedInIcon fontSize="medium" color="primary"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook" arrow enterDelay={500} placement="bottom">
            <IconButton draggable={false} size="small" target="_blank" href="https://www.facebook.com/paolobugarin19/" sx={{mixBlendMode: "difference"}} disableTouchRipple>
              <FacebookIcon fontSize="medium" color="primary"/>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

    </SubsettingContainer>
  )
}

export default Contact
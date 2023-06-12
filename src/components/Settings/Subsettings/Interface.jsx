import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import useSettingsRedux from '../../../hooks/useSettingsRedux'
import { Box, Typography } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'
import { rgbToHex } from '@mui/material'
import hexToRgb from "../../../utils/hex-to-rgb"

const labelStyles = {
  fontSize: 15,
  letterSpacing:.5, 
}


const Interface = () => {
  const { ui, changeContainerColor } = useSettingsRedux();
  const [r, g ,b, a] = ui.containerColor.substr(21).split(", ", 4);


  return (
    <SubsettingContainer title="Interface">
      <Box>
        <Typography variant="body2" fontSize={18} letterSpacing={.5}>Container Color</Typography>

        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={2}>
          <Typography variant="body2" sx={labelStyles}>Color</Typography>
          <MuiColorInput value={rgbToHex(`rgb(${r},${g},${b})`)} onChange={(e) => changeContainerColor({color: e, alpha: parseFloat(a)})} size='small' sx={{fontSize: 13, letterSpacing: .5}}/>

        </Box>
      </Box>
    </SubsettingContainer>
  )
}

export default Interface

/**
 * containerColor(pin):"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
isHintsEnabled(pin):true
primaryColor(pin):"#45a198"
settingsPosition(pin):"top"
 */
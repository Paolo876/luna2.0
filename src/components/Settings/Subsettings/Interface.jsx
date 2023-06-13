import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import useSettingsRedux from '../../../hooks/useSettingsRedux'
import useUiRedux from '../../../hooks/useUiRedux'
import { Box, Slider, Typography, Tooltip } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'
import { rgbToHex } from '@mui/material'
import hexToRgb from "../../../utils/hex-to-rgb"


const labelStyles = {
  fontSize: 15,
  letterSpacing:.5, 
}

const valueLabelComponent = ({ children, value }) => (
  <Tooltip enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);


const Interface = () => {
  const { interface: { containerColor }, changeContainerColor } = useUiRedux();
  const [r, g ,b, a] = containerColor.substr(21).split(", ", 4);

  // console.log(r, g ,b, a)
  return (
    <SubsettingContainer title="Interface">
      <Box>
        <Typography variant="body2" fontSize={18} letterSpacing={.5}>Container Color</Typography>

        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={2} ml={1.5}>
          <Typography variant="body2" sx={labelStyles}>Color</Typography>
          <MuiColorInput value={rgbToHex(`rgb(${r},${g},${b})`)} onChange={(e) => changeContainerColor({color: e, alpha: parseFloat(a)})} size='small' sx={{fontSize: 13, letterSpacing: .5}}/>
          {/* <input type="color"
            value={rgbToHex(`rgb(${r},${g},${b})`)}
            onChange={ e => changeContainerColor({color: hexToRgb(e.target.value), alpha: parseFloat(a)})}
          /> */}
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} my={2} ml={1.5}>
          <Typography variant="body2" sx={labelStyles}>Alpha</Typography>
          <Slider
            sx={{width: 290, ml: "auto", mr:1}}
            min={.1}
            max={1}
            step={.1}
            valueLabelDisplay="auto"
            value={parseFloat(a)}
            onChange={(e) => changeContainerColor({color: `rgb(${r},${g},${b})`, alpha: e.target.value})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
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
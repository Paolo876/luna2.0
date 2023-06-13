import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import useUiRedux from '../../../hooks/useUiRedux'
import { Box, Slider, Typography, Tooltip, Button } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'


const labelStyles = {
  fontSize: 16,
  letterSpacing:.5, 
}

const valueLabelComponent = ({ children, value }) => (
  <Tooltip enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);


const Interface = () => {
  const { interface: { containerColor, primaryColor, backdropFilter }, changeContainerColor } = useUiRedux();
  const [r, g ,b, a] = containerColor.substr(21).split(", ", 4);
  console.log(backdropFilter)
  return (
    <SubsettingContainer title="Interface">
      <Box pr={4} mb={1.5}>
        <Typography variant="body2" sx={labelStyles}>Container Color</Typography>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={1.5} ml={1.5}>
          <Typography variant="body2" fontSize={13} sx={{opacity: .8}}>Color</Typography>
          <MuiColorInput value={`rgb(${r},${g},${b})`} onChange={(e) => changeContainerColor({color: e, alpha: parseFloat(a)})} size='small' sx={{fontSize: 13, letterSpacing: .5, width: 225}}/>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={1.5} ml={1.5}>
          <Typography variant="body2" fontSize={13} sx={{opacity: .8}}>Alpha</Typography>
          <Slider
            size="small"
            sx={{width: 225, ml: "auto"}}
            min={.1}
            max={1}
            step={.02}
            valueLabelDisplay="auto"
            value={parseFloat(a)}
            onChange={(e) => changeContainerColor({color: `rgb(${r},${g},${b})`, alpha: e.target.value})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
        </Box>
      </Box>
      <Box pr={4} mb={1.5}>
        <Typography variant="body2" sx={labelStyles}>Backdrop</Typography>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={1.5} ml={1.5}>
          <Typography variant="body2" fontSize={13} sx={{opacity: .8}}>Blur</Typography>
          <Slider
            size="small"
            sx={{width: 225, ml: "auto"}}
            min={.1}
            max={1}
            step={.02}
            valueLabelDisplay="auto"
            value={parseFloat(a)}
            onChange={(e) => changeContainerColor({color: `rgb(${r},${g},${b})`, alpha: e.target.value})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={1.5} ml={1.5}>
          <Typography variant="body2" fontSize={13} sx={{opacity: .8}}>Contrast</Typography>
          <Slider
            size="small"
            sx={{width: 225, ml: "auto"}}
            min={.1}
            max={1}
            step={.02}
            valueLabelDisplay="auto"
            value={parseFloat(a)}
            onChange={(e) => changeContainerColor({color: `rgb(${r},${g},${b})`, alpha: e.target.value})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} mb={1.5} ml={1.5}>
          <Typography variant="body2" fontSize={13} sx={{opacity: .8}}>Brightness</Typography>
          <Slider
            size="small"
            sx={{width: 225, ml: "auto"}}
            min={.1}
            max={1}
            step={.02}
            valueLabelDisplay="auto"
            value={parseFloat(a)}
            onChange={(e) => changeContainerColor({color: `rgb(${r},${g},${b})`, alpha: e.target.value})}
            slots={{
              valueLabel: valueLabelComponent,
            }}
          />
        </Box>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} pr={4}>
        <Typography variant="body2" sx={labelStyles}>Primary Color</Typography>
        <MuiColorInput value={primaryColor} size='small' sx={{fontSize: 13, letterSpacing: .5, width: 225}}/>
      </Box>
      <Box sx={{display: "flex", justifyContent: "right", px: 3, mt: "auto"}}>
        <Button color="warning" variant="contained" size="small" onClick={() => console.log("reset")} sx={{fontSize: 12}}>Reset To Default</Button>
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
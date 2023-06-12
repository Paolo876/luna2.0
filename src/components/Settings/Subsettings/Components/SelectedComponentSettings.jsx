import React from 'react'
import useSettingsRedux from '../../../../hooks/useSettingsRedux'
import { Box, Divider, Slider, Switch, Typography, Tooltip, Grid } from '@mui/material'


const labelStyles = {
  fontSize: 15,
  letterSpacing:.5, 
}

const valueLabelComponent = ({ children, value }) => (
  <Tooltip enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);


const SelectedComponentSettings = ({ component }) => {
  const { components, setIsVisible, changeStyle } = useSettingsRedux()
  const selectedComponent = components.find(item => item.name === component)

  console.log(selectedComponent.addedStyles)
  return (
    <Box mt={2} px={2}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography variant="body2" sx={labelStyles}>Show Component</Typography>
        <Switch
          checked={selectedComponent.isVisible}
          onChange={() => setIsVisible(component)}
        />
      </Box>
      <Divider/>
      <Box sx={{position: "relative", opacity: selectedComponent.isVisible ? 1 : .25}}>
        {!selectedComponent.isVisible && <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", zIndex: 5}}></Box>}
        <Box my={2}>
          <Grid container spacing={3} alignItems="center" justifyContent="center" pr={2}>
            <Grid item mb={1}><Typography variant="body2" sx={labelStyles}>Opacity</Typography></Grid>
            <Grid item xs>          
              <Slider
                min={.01}
                max={1}
                step={.01}
                valueLabelDisplay="auto"
                value={selectedComponent.addedStyles.opacity}
                onChange={(e) => changeStyle({id: "opacity", value: e.target.value, name: component})}
                slots={{
                  valueLabel: valueLabelComponent,
                }}
              />
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Box>
  )
}

export default SelectedComponentSettings


// font dropdown
// font weight slider
// color selector
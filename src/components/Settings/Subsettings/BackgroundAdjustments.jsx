import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import useBackgroundRedux from '../../../hooks/useBackgroundRedux'
import { Slider, Typography, Box, Grid, Input, Tooltip, Button } from '@mui/material'

const valueLabelComponent = ({ children, value }) => (
  <Tooltip enterTouchDelay={0} placement="top" title={value}>
    {children}
  </Tooltip>
);


const BackgroundAdjustments = () => {
  const { filter } = useBackgroundRedux();
  console.log(filter)
  return (
    <SubsettingContainer title="Background Adjustments">

      <Box mb={2.5} mt={2}>
        <Typography variant='body2' fontSize={14.5} mb={2}>Brightness</Typography>
        <Grid container px={3} >
          <Grid item xs={10.5} pr={2}>
            <Slider
              step={1}
              max={200}
              min={0}
              color="secondary"
              value={filter.brightness}
              valueLabelDisplay="auto"
              slots={{
                valueLabel: valueLabelComponent,
              }}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Input
              value={filter.brightness}
              size="small"
              // onChange={handleInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 200,
                type: 'number',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2.5}>
        <Typography variant='body2' fontSize={14.5} mb={2}>Contrast</Typography>
        <Grid container px={3} >
          <Grid item xs={10.5} pr={2}>
            <Slider
              step={1}
              max={200}
              min={0}
              color="secondary"
              value={filter.contrast}
              valueLabelDisplay="auto"
              slots={{
                valueLabel: valueLabelComponent,
              }}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Input
              value={filter.contrast}
              size="small"
              // onChange={handleInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 200,
                type: 'number',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2.5}>
        <Typography variant='body2' fontSize={14.5} mb={2}>Saturation</Typography>
        <Grid container px={3} >
          <Grid item xs={10.5} pr={2}>
            <Slider
              step={1}
              max={200}
              min={0}
              color="secondary"
              value={filter.saturation}
              valueLabelDisplay="auto"
              slots={{
                valueLabel: valueLabelComponent,
              }}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Input
              value={filter.saturation}
              size="small"
              // onChange={handleInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 200,
                type: 'number',
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{display: "flex", justifyContent: "right", px: 3, mt: 6.5}}>
        <Button color="warning" variant="contained" size="small">Reset To Default</Button>
      </Box>
    </SubsettingContainer>
  )
}

export default BackgroundAdjustments
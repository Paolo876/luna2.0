import { useEffect, useState } from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { Box, Typography, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import useSettingsRedux from "../../../../hooks/useSettingsRedux";
import DisplayNameInput from './DisplayNameInput';

const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
  const { dateFormat, timeFormat, changeTimeFormat, temperatureUnit, changeTemperatureUnit } = useSettingsRedux();
  console.log(temperatureUnit)

  return ( 
    <SubsettingContainer title="General">
      <Box>
        <Box mb={3}>
          <DisplayNameInput/>
        </Box>
        
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Time Format</Typography></InputLabel>
          <Select
            value={timeFormat}
            onChange={(e) => changeTimeFormat(e.target.value)}
          >
            <MenuItem value={"12"} sx={{color: "black"}}>12 Hours</MenuItem>
            <MenuItem value={"24"} sx={{color: "black"}}>24 Hours</MenuItem>
          </Select>
        </FormControl>
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Date Format</Typography></InputLabel>
          <Select
            // value={age}
            // onChange={handleChange}
          >
          </Select>
        </FormControl>
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Temperature Unit</Typography></InputLabel>
          <Select
            value={temperatureUnit}
            onChange={(e) => changeTemperatureUnit(e.target.value)}
          >
            <MenuItem value={"f"} sx={{color: "black"}}>Fahrenheit</MenuItem>
            <MenuItem value={"c"} sx={{color: "black"}}>Celsius</MenuItem>
            <MenuItem value={"k"} sx={{color: "black"}}>Kelvin</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </SubsettingContainer>
  )
}

export default General
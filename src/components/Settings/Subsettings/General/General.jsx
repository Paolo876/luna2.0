import { useEffect, useState } from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { Box, Typography, Select, FormControl, InputLabel, MenuItem, Stack } from '@mui/material'
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
      {/* <Box sx={{overflowY: "auto"}}> */}
        <Box mb={3}>
          <DisplayNameInput/>
        </Box>
        
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Time Format</Typography></InputLabel>
          <Select
            value={timeFormat}
            onChange={(e) => changeTimeFormat(e.target.value)}
            size="small"
            sx={{
              // '.MuiSelect-select .MuiSelect-standard .MuiInputBase-input .MuiInput-input' : labelStyles
            }}
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
            size="small"
          >
            <MenuItem value={"f"} sx={{color: "black"}}>Fahrenheit</MenuItem>
            <MenuItem value={"c"} sx={{color: "black"}}>Celsius</MenuItem>
            <MenuItem value={"k"} sx={{color: "black"}}>Kelvin</MenuItem>
          </Select>
        </FormControl>
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Temperature Unit</Typography></InputLabel>
          <Select
            value={temperatureUnit}
            onChange={(e) => changeTemperatureUnit(e.target.value)}
            size="small"
          >
            <MenuItem value={"f"} sx={{color: "black"}}>Fahrenheit</MenuItem>
            <MenuItem value={"c"} sx={{color: "black"}}>Celsius</MenuItem>
            <MenuItem value={"k"} sx={{color: "black"}}>Kelvin</MenuItem>
          </Select>
        </FormControl>
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Temperature Unit</Typography></InputLabel>
          <Select
            value={temperatureUnit}
            onChange={(e) => changeTemperatureUnit(e.target.value)}
            size="small"
          >
            <MenuItem value={"f"} sx={{color: "black"}}>Fahrenheit</MenuItem>
            <MenuItem value={"c"} sx={{color: "black"}}>Celsius</MenuItem>
            <MenuItem value={"k"} sx={{color: "black"}}>Kelvin</MenuItem>
          </Select>
        </FormControl>
      {/* </Box> */}
    </SubsettingContainer>
  )
}

export default General


/**
 * weekday: "long", "narrow", "short", undefined
 * month: "long", "narrow", "short", "2-digit", undefined
 * day: "numeric", "2-digit", undefined,
 * year: "2-digit", "numeric"
 * 
 * TIME FORMATS
 * 'en-US'  -> Month-day-year
 * 'en-GB'  -> day-month-year
 * 'ko-KR'  -> year-month-day
 *   
 */
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
  const { dateFormat, dateOptions, timeFormat, changeTimeFormat, temperatureUnit, changeTemperatureUnit, changeDateFormat } = useSettingsRedux();
  
  
  // const handleChangeDateOption = (item, value) => {
    
  // }

  return ( 
    <SubsettingContainer title="General">
      <Box mb={4}>
        <DisplayNameInput/>
      </Box>
      
      <FormControl  variant="standard" sx={{ mb: 4, width: "100%" }}>
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
      <FormControl  variant="standard" sx={{ mb: 4, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Date Format</Typography></InputLabel>
        <Select
          value={dateFormat}
          onChange={(e) => changeDateFormat(e.target.value)}
          size="small"
        >
          <MenuItem value={"en-US"} sx={{color: "black"}}>Month-Day-Year</MenuItem>
          <MenuItem value={"en-GB"} sx={{color: "black"}}>Day-Month-Year</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ mb: 4, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Date Options:</Typography></InputLabel>
          <FormControl  variant="standard" sx={{ mb: 4, pl: 1, width: "100%" }}>
            <InputLabel shrink={true}><Typography variant="body2" sx={{ fontSize: 18, letterSpacing: .5, pl: 1}}>Weekday</Typography></InputLabel>
            <Select
              value={dateFormat}
              onChange={(e) => changeDateFormat(e.target.value)}
              size="small"
            >
              <MenuItem value={"long"} sx={{color: "black"}}>Long</MenuItem>
              <MenuItem value={"narrow"} sx={{color: "black"}}>Narrow</MenuItem>
              <MenuItem value={"short"} sx={{color: "black"}}>Short</MenuItem>
              <MenuItem value={undefined} sx={{color: "black"}}>Hidden</MenuItem>
            </Select>
          </FormControl>
      </Box>
      
      <FormControl  variant="standard" sx={{ mb: 4, width: "100%" }}>
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
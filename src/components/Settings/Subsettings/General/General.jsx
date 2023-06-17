import SubsettingContainer from '../SubsettingContainer'
import { useSnackbar } from 'notistack'
import { Box, Typography, Select, FormControl, InputLabel, MenuItem, Stack, Switch } from '@mui/material'
import useSettingsRedux from "../../../../hooks/useSettingsRedux";
import DisplayNameInput from './DisplayNameInput';
import useUiRedux from "../../../../hooks/useUiRedux"

const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
  const { dateFormat, dateOptions, timeFormat, changeTimeFormat, temperatureUnit, changeTemperatureUnit, changeDateFormat, changeDateOptions } = useSettingsRedux();
  const { interface: { isHintsEnabled }, toggleHints} = useUiRedux();
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = ({ action, value }) => {
    if(action === "time"){
      changeTimeFormat(value)
      enqueueSnackbar('Time Format updated!', { variant: "success" })
    }
    if(action === "date"){
      changeDateFormat(value)
      enqueueSnackbar('Date Format updated!', { variant: "success" })
    }
    if(action === "temp"){
      changeTemperatureUnit(value)
      enqueueSnackbar('Temperature Unit updated!', { variant: "success" })
    }
  }

  return ( 
    <SubsettingContainer title="General">
      <Box mb={4}>
        <DisplayNameInput/>
      </Box>
      
      <FormControl  variant="standard" sx={{ mb: 4.25, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Time Format</Typography></InputLabel>
        <Select
          value={timeFormat}
          onChange={(e) => handleClick({action: "time", value: e.target.value})}
          size="small"
          sx={{ fontSize: 17}}
        >
          <MenuItem value={"12"} sx={{color: "black"}}>12 Hours</MenuItem>
          <MenuItem value={"24"} sx={{color: "black"}}>24 Hours</MenuItem>
        </Select>
      </FormControl>
      <FormControl  variant="standard" sx={{ mb: 4.25, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Date Format</Typography></InputLabel>
        <Select
          value={dateFormat}
          onChange={(e) => handleClick({action: "date", value: e.target.value})}
          size="small"
          sx={{ fontSize: 17}}
        >
          <MenuItem value={"en-US"} sx={{color: "black"}}>Month-Day-Year</MenuItem>
          <MenuItem value={"en-GB"} sx={{color: "black"}}>Day-Month-Year</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ mb: 4.25, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Date Options:</Typography></InputLabel>
          <FormControl  variant="standard" sx={{ mb: 1.75, pl: 1, width: "100%" }}>
            <InputLabel shrink={true}><Typography variant="body2" sx={{ fontSize: 18, letterSpacing: .5, pl: 1, opacity: .75}}>Weekday</Typography></InputLabel>
            <Select
              value={dateOptions.weekday === undefined ? "hidden" : dateOptions.weekday}
              onChange={(e) => changeDateOptions({item: "weekday", value: e.target.value})}
              size="small"
              sx={{ fontSize: 17}}
            >
              <MenuItem value={"long"} sx={{color: "black"}}>Long</MenuItem>
              <MenuItem value={"narrow"} sx={{color: "black"}}>Narrow</MenuItem>
              <MenuItem value={"short"} sx={{color: "black"}}>Short</MenuItem>
              <MenuItem value={"hidden"} sx={{color: "black"}}>Hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl  variant="standard" sx={{ mb: 1.75, pl: 1, width: "100%" }}>
            <InputLabel shrink={true}><Typography variant="body2" sx={{ fontSize: 18, letterSpacing: .5, pl: 1, opacity: .75}}>Month</Typography></InputLabel>
            <Select
              value={dateOptions.month === undefined ? "hidden" : dateOptions.month}
              onChange={(e) => changeDateOptions({item: "month", value: e.target.value})}
              size="small"
              sx={{ fontSize: 17}}
            >
              <MenuItem value={"long"} sx={{color: "black"}}>Long</MenuItem>
              <MenuItem value={"narrow"} sx={{color: "black"}}>Narrow</MenuItem>
              <MenuItem value={"short"} sx={{color: "black"}}>Short</MenuItem>
              <MenuItem value={"2-digit"} sx={{color: "black"}}>2-Digit</MenuItem>
              <MenuItem value={"hidden"} sx={{color: "black"}}>Hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl  variant="standard" sx={{ mb: 1.75, pl: 1, width: "100%" }}>
            <InputLabel shrink={true}><Typography variant="body2" sx={{ fontSize: 18, letterSpacing: .5, pl: 1, opacity: .75}}>Day</Typography></InputLabel>
            <Select
              value={dateOptions.day === undefined ? "hidden" : dateOptions.day}
              onChange={(e) => changeDateOptions({item: "day", value: e.target.value})}
              size="small"
              sx={{ fontSize: 17}}
           >
              <MenuItem value={"numeric"} sx={{color: "black"}}>Numeric</MenuItem>
              <MenuItem value={"2-digit"} sx={{color: "black"}}>2-Digit</MenuItem>
              <MenuItem value={"hidden"} sx={{color: "black"}}>Hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl  variant="standard" sx={{ pl: 1, width: "100%" }}>
            <InputLabel shrink={true}><Typography variant="body2" sx={{ fontSize: 18, letterSpacing: .5, pl: 1, opacity: .75}}>Year</Typography></InputLabel>
            <Select
              value={dateOptions.year === undefined ? "hidden" : dateOptions.year}
              onChange={(e) => changeDateOptions({item: "year", value: e.target.value})}
              size="small"
              sx={{ fontSize: 17}}
           >
              <MenuItem value={"numeric"} sx={{color: "black"}}>Numeric</MenuItem>
              <MenuItem value={"2-digit"} sx={{color: "black"}}>2-Digit</MenuItem>
              <MenuItem value={"hidden"} sx={{color: "black"}}>Hidden</MenuItem>
            </Select>
          </FormControl>
      </Box>
      
      <FormControl  variant="standard" sx={{ mb: 4.25, width: "100%" }}>
        <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Temperature Unit</Typography></InputLabel>
        <Select
          value={temperatureUnit}
          onChange={(e) => handleClick({action: "temp", value: e.target.value})}
          size="small"
        >
          <MenuItem value={"f"} sx={{color: "black"}}>Fahrenheit</MenuItem>
          <MenuItem value={"c"} sx={{color: "black"}}>Celsius</MenuItem>
          <MenuItem value={"k"} sx={{color: "black"}}>Kelvin</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ mb: 4.25, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Typography variant="body2" sx={{...labelStyles, fontSize: 16, opacity: .8}}>Show Hints Notifications</Typography>
        <Switch
          checked={isHintsEnabled}
          onChange={() => toggleHints()}
        />
      </Box>

    </SubsettingContainer>
  )
}

export default General
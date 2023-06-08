import { useEffect, useState } from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Box, TextField, Typography, Select, FormControl, InputLabel, Button, InputAdornment } from '@mui/material'
import useSettingsRedux from "../../../hooks/useSettingsRedux";
import useUserRedux from "../../../hooks/useUserRedux"


const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
  const { name, setUserName } = useUserRedux();
  const { dateFormat } = useSettingsRedux();
  const [ nameInput, setNameInput ] = useState(name)

  
  const handleNameSubmit = () => {
    setUserName(nameInput)
  }

  useEffect(() => {
    setNameInput(name)
  }, [name])

  return ( 
    <SubsettingContainer title="General">
      <Box>
        <TextField 
          type="text"
          size='small' 
          variant="standard" 
          fullWidth 
          inputProps={{maxLength: 15}} 
          label={<Typography variant="body2" sx={labelStyles}>Change Display Name</Typography>} 
          InputLabelProps={{shrink: true}}
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          onKeyDown={e => { if(e.key === "Enter") handleNameSubmit()}}
          InputProps={{ endAdornment: (
          <InputAdornment position="end">
            {nameInput !== name && (
              <Button 
                type="button"
                size="small" 
                variant="contained" 
                onClick={handleNameSubmit}
                sx={{py: .25, px: 1.5, fontSize: 9, fontWeight: 400, letterSpacing: .15, mr: .5, opacity: .8}}
              >
                Save Changes
              </Button>
            )}
          </InputAdornment>
        )}}
          sx={{
            mb: 3,
            '.MuiInputBase-input': { 
                fontWeight: 500,
                px: .5,
                py: .25,
                mt: 1,
                fontSize: ".85em",
                letterSpacing: .75,
              },
        }}
        />
        {/* <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
          <InputLabel shrink={true}><Typography variant="body2" sx={labelStyles}>Change Time Format</Typography></InputLabel>
          <Select
            // value={age}
            // onChange={handleChange}
          >
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
            // value={age}
            // onChange={handleChange}
          >
          </Select>
        </FormControl> */}
        {/* <Box>
          <Button variant="contained">Save Changes</Button>
        </Box> */}
      </Box>
    </SubsettingContainer>
  )
}

export default General
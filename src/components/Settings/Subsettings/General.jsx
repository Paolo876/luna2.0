import { useEffect, useState } from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Box, TextField, Typography, Select, FormControl, InputLabel, Button, InputAdornment } from '@mui/material'
import useSettingsRedux from "../../../hooks/useSettingsRedux";
import useUserRedux from "../../../hooks/useUserRedux"
import validateInput from '../../../utils/validate-input';

const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
  const { name, setUserName } = useUserRedux();
  const { dateFormat } = useSettingsRedux();
  const [ nameInput, setNameInput ] = useState(name)
  const [ nameError, setNameError ] = useState({state: false, value: null})

  
  const handleNameSubmit = () => {
    if(validateInput(nameInput, "text")) {
      setNameError({state: false, value: null});
      setUserName(nameInput);
    } else {
      setNameError({state: true, value:"Please enter a valid name."})
      // setNameInput("")
    }
  }

  useEffect(() => {
    setNameInput(name)
  }, [name])

  return ( 
    <SubsettingContainer title="General">
      <Box>
        <Box mb={3}>
          <TextField 
            type="text"
            size='small' 
            variant="standard" 
            fullWidth 
            inputProps={{maxLength: 15}} 
            label={<Typography variant="body2" sx={labelStyles}>Change Display Name</Typography>} 
            InputLabelProps={{shrink: true}}
            value={nameInput}
            error={nameError.state}
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
          {nameError.state && <Typography variant="body2" color="error.light" mt={.15} fontStyle="italic" fontSize={12} letterSpacing={.25} sx={{opacity: .65}}>{nameError.value}</Typography>}
        </Box>
        
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
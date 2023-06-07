import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Box, TextField, Typography, Select, FormControl, InputLabel, Button } from '@mui/material'


const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
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
        <FormControl  variant="standard" sx={{ mb: 3, width: "100%" }}>
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
        </FormControl>
        {/* <Box>
          <Button variant="contained">Save Changes</Button>
        </Box> */}
      </Box>
    </SubsettingContainer>
  )
}

export default General
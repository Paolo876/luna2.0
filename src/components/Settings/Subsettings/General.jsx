import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import { Box, TextField, Typography } from '@mui/material'


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
          '.MuiInputBase-input': { 
              fontWeight: 500,
              px: .5,
              mt: 1.15,
              // height: 32,
              fontSize: ".9em",
              letterSpacing: .75,
            },
        }}
        />
      </Box>
    </SubsettingContainer>
  )
}

export default General
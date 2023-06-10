import React from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { FormControl, FormControlLabel, Radio, RadioGroup, Box, Typography } from '@mui/material'


const Background = () => {
  return (
    <SubsettingContainer title="Background">
      <Box>
        <Typography variant="body2" sx={{opacity: .8, mt: 1, fontSize: 13, }}>
          Note: Random background images are generated on reload if no image is set as default.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel value="local" control={<Radio />} label="Saved Backgrounds" />
          <FormControlLabel value="fetch" control={<Radio />} label="Fetch Random Backgrounds" />
        </RadioGroup>
      </FormControl>
    </SubsettingContainer>
  )
}

export default Background
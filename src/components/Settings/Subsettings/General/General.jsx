import { useEffect, useState } from 'react'
import SubsettingContainer from '../SubsettingContainer'
import { Box, Typography, Select, FormControl, InputLabel } from '@mui/material'
import useSettingsRedux from "../../../../hooks/useSettingsRedux";
import DisplayNameInput from './DisplayNameInput';

const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
}


const General = () => {
  const { dateFormat } = useSettingsRedux();


  return ( 
    <SubsettingContainer title="General">
      <Box>
        <Box mb={3}>
          <DisplayNameInput/>
        </Box>
        
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
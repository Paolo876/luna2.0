import React from 'react'
import useSettingsRedux from '../../../../hooks/useSettingsRedux'
import { Box, Switch, Typography } from '@mui/material'


const labelStyles = {
  fontSize: 14,
  letterSpacing:.5, 
}

const SelectedComponentSettings = ({ component }) => {
  const { components } = useSettingsRedux()
  const selectedComponent = components.find(item => item.name === component)

  console.log(selectedComponent, component)
  return (
    <Box mt={2} px={2}>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="body2" sx={labelStyles}>Show Component</Typography>
        <Switch

        />
      </Box>

    </Box>
  )
}

export default SelectedComponentSettings
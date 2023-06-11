import React from 'react'
import SubsettingContainer from './SubsettingContainer'
import useBackgroundRedux from '../../../hooks/useBackgroundRedux'
import { Slider, Typography } from '@mui/material'


const BackgroundAdjustments = () => {
  const { filter } = useBackgroundRedux();
  console.log(filter)
  return (
    <SubsettingContainer title="Background Adjustments">
      asdsa
    </SubsettingContainer>
  )
}

export default BackgroundAdjustments
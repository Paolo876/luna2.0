import { useRef } from "react";
import ComponentContainer from '../UI/ComponentContainer'
import useUserRedux from '../../hooks/useUserRedux'
import { Typography } from '@mui/material'

const Greeting = () => {
  const { name } = useUserRedux();
  return (
    <ComponentContainer 
      additionalStyles={{
        top: "32%",
        background: "radial-gradient(rgba(0, 0, 0, 0.1) 10%, transparent 60%)",

      }}
      >Greeting</ComponentContainer>
  )
}

export default Greeting
import React from 'react'
import { useState } from "react";
import { useUserRedux } from "../../hooks/useUserRedux";

import validateInput from "../../utils/validate-input";

import { Typography, Box, TextField } from '@mui/material'
import "./WelcomePrompt.scss"
import Image from 'mui-image';
import logo from "../../assets/logo.png"
const WelcomePrompt = () => {
  const { setUserName } = useUserRedux();
  const [ name, setName ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    // if(validateInput(inputRef.current.value, "text")){
    //   setUserName(inputRef.current.value);
    // } else {
    //   inputRef.current.value = "";
    // }
  }
  return (
    <Box className="welcome-prompt">
      <Box mb={5}>
        <Image src={logo} height={250} width="auto"/>
      </Box>
      <Box >
        <Typography variant="body1" className="description">Welcome to Luna! Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'.</Typography>
        <Typography variant="body2" className="description-note" color="secondary.light">Please understand that this app is designed and optimized for PC browsers. UI and features may not function properly if used on mobile.</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h3">Before we get started, <br/>what is your name?</Typography>
        <TextField variant="standard" placeholder='John' value={name} onChange={e => setName(e.target.value)}/>
      </Box>
    </Box>
  )
}

export default WelcomePrompt
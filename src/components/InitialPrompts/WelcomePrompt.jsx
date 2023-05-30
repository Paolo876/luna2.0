import React from 'react'
import { useState } from "react";
import { useUserRedux } from "../../hooks/useUserRedux";

import validateInput from "../../utils/validate-input";

import { Typography, Box, TextField } from '@mui/material'

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
    <Box>
      <Box>
        <Typography variant="h1">Welcome to Luna!</Typography>
        <Typography variant="body1">Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'.</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography>Before we get started, please enter your name?</Typography>
        <TextField variant="standard" placeholder='John' value={name} onChange={e => setName(e.target.value)}/>
      </Box>
    </Box>
  )
}

export default WelcomePrompt
import { useState, useEffect } from 'react'
import useUserRedux from '../../../../hooks/useUserRedux'
import validateInput from '../../../../utils/validate-input'
import { TextField, Typography, Button, InputAdornment } from '@mui/material'


const labelStyles = {
  fontSize: 20,
  letterSpacing:.5, 
  opacity: .85, 
}


const DisplayNameInput = () => {
  const { name, setUserName } = useUserRedux();
  const [ nameInput, setNameInput ] = useState(name)
  const [ nameError, setNameError ] = useState({state: false, value: null})

  const handleNameSubmit = () => {
    if(validateInput(nameInput, "text")) {
      setNameError({state: false, value: null});
      setUserName(nameInput);
    } else {
      setNameError({state: true, value:"Please enter a valid name."})
    }
  }

  useEffect(() => {
    setNameInput(name)
  }, [name])

  useEffect(() => {
    if(validateInput(nameInput, "text")) {
      setNameError({state: false, value: null});
    } else {
      setNameError({state: true, value:"Please enter a valid name."})
    }
  }, [nameInput])


  return (
    <>
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
                disabled={nameError.state}
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
              fontSize: 17,
              letterSpacing: .75,
            },
        }}
      />
      {nameError.state && (
        <Typography 
          variant="body2" 
          color="error.light" 
          mt={.15} 
          fontStyle="italic" 
          fontSize={12} 
          letterSpacing={.25} 
          sx={{opacity: .65}}
        >
          {nameError.value}
        </Typography>
      )}
    </>
  )
}

export default DisplayNameInput
import { useState } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import useTodoRedux from "../../hooks/useTodoRedux";

const AddTodoForm = ({ addedStyles }) => {
  const { addTodo } = useTodoRedux();
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length !== 0) {
      addTodo(inputValue)
    }
    setInputValue("")
  }
  return (
    <Box 
      onSubmit={handleSubmit} 
      component="form"
      sx={{
        width: '100%',
        padding: '.5em',
        mb: 1.5,
      }}
    >
      <TextField
        type="text"
        size="small"
        fullWidth
        variant="standard"
        placeholder="Add Todo"
        inputProps={{maxLength: 28}}
        InputProps={{ endAdornment: (
          <InputAdornment position="end">
            <EditNoteIcon sx={{mr: 1}} color="primary"/>
          </InputAdornment>
        )}}
        sx={{
          background: "rgba(80,80,80,0.15)",
          '.MuiInputBase-input': { 
              fontWeight: 300,
              px: 1,
              height: 32,
              fontSize: ".85em",
              fontFamily: addedStyles.fontFamily,
              color: addedStyles.color,
            },
            '.MuiInputBase-input::placeholder': {
              fontWeight: 300,
              color: "white",
              opacity: .7,
              fontSize: ".8em",
              letterSpacing: .5,
              fontFamily: addedStyles.fontFamily,
              color: addedStyles.color,
            }
        }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </Box>
  )
}

export default AddTodoForm
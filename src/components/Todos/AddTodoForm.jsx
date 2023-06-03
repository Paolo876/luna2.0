import { useState } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import useTodoRedux from "../../hooks/useTodoRedux";

const AddTodoForm = () => {
  const { addTodo } = useTodoRedux();
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue)
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
        size="small"
        fullWidth
        variant="standard"
        placeholder="Add Todo"
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
            },
            '.MuiInputBase-input::placeholder': {
              fontWeight: 300,
              color: "white",
              opacity: .7,
              fontSize: ".8em",
              letterSpacing: .5,
            }
        }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </Box>
  )
}

export default AddTodoForm
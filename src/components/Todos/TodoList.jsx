import { useState } from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { Checkbox, List, ListItem, ListItemButton, ListItemText, Typography, IconButton, ListItemIcon, Box, TextField, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const TodoList = () => {
  const { items, finishTodo, editTodo, deleteTodo } = useTodoRedux();
  const [ isEditable, setIsEditable ] = useState(null);
  const [ input, setInput ] = useState(null);

  const handleEditBtn = (id, text) => {
    setIsEditable(id)
    setInput(text)
  }
 
  const handleSubmit = (e, id, text) => {
    e.preventDefault()
    if(input !== text && input.trim().length !== 0) editTodo({id, text: input})
    
    setIsEditable(null)
    setInput(null)
  }


  return (
    <List
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {items.map(item => (
        <ListItem 
          disablePadding
          key={item.id}
          secondaryAction={
            isEditable === item.id ? <>

            </> :
            <Box>
              <IconButton edge="end" aria-label="comments" sx={{mr: .01, opacity: item.isFinished ? .25 : 1, }} disabled={item.isFinished || isEditable !== null} onClick={() => handleEditBtn(item.id, item.text)}>
                <EditIcon color="primary" fontSize="small"/>
              </IconButton>
              <IconButton edge="end" aria-label="comments" disabled={isEditable !== null} onClick={() => deleteTodo(item.id)}>
                <CloseIcon color="primary" fontSize="small"/>
              </IconButton>
            </Box>

          }
          sx={{
            opacity: isEditable !== null && isEditable !== item.id ? .7 : 1
          }}
        >
          { isEditable === item.id ?
            <Box sx={{width: "100%", p:0, mx:2, zIndex: isEditable === item.id ? 6 : "initial"}} component="form" onSubmit={e => handleSubmit(e, item.id, item.text)}>
              <TextField 
                type="text"
                size='small' 
                variant="standard" 
                autoFocus
                value={input} 
                onChange= {e => setInput(e.target.value)}
                fullWidth
                sx={{
                  background: "rgba(80,80,80,0.15)",
                  '.MuiInputBase-input': { 
                      fontWeight: 400,
                      px: 1,
                      height: 32,
                      fontSize: ".85em",
                    },
                }}
                inputProps={{maxLength: 28}}
                InputProps={{ endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" size="small"  sx={{mr: .5}}>
                      <KeyboardReturnIcon color="primary"/>
                    </IconButton>
                  </InputAdornment>
                )}}
                />

            </Box>
          :
            <ListItemButton role={undefined} onClick={() => finishTodo(item.id)} dense sx={{py: 0}} disabled={isEditable !== null}>
              <ListItemIcon sx={{minWidth: "initial", mr: 1.5}}>
                <Checkbox
                  size="small"
                  edge="start"
                  checked={item.isFinished}
                  inputProps={{ 'aria-labelledby': item.id}}
                />
              </ListItemIcon>
              <ListItemText 
                id={item.id} 
                primary={<Typography 
                  variant="body2" 
                  letterSpacing={.5} 
                  fontWeight={300}
                  sx={{
                    transition: "all .1s linear",
                    fontFamily: "Inter",
                    fontStyle: item.isFinished ? "italic" : "initial",
                    textDecoration: item.isFinished ? "line-through" : "initial",
                    opacity: item.isFinished ? .6 : 1,
                    transform: item.isFinished ? "translateX(0.25em)" : "none",
                  }}
                >
                  {item.text}
                </Typography>} 
              />
            </ListItemButton>
          }
        </ListItem>
      ))}

      {/* overlay for input blur */}
      {isEditable && <Box 
        sx={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          zIndex: 5,
        }}
        onClick={() => setIsEditable(null)}
      ></Box>}
    </List>
  )
}

export default TodoList
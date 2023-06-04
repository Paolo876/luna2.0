import { useState } from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { Checkbox, List, ListItem, ListItemButton, ListItemText, Typography, IconButton, ListItemIcon, Box, TextField } from '@mui/material';
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



  return (
    <List
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        // p: ".5em",
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
              <IconButton edge="end" aria-label="comments" sx={{mr: .01, opacity: item.isFinished ? .25 : 1, }} disabled={item.isFinished || isEditable} onClick={() => handleEditBtn(item.id, item.text)}>
                <EditIcon color="primary" fontSize="small"/>
              </IconButton>
              <IconButton edge="end" aria-label="comments" disabled={isEditable}>
                <CloseIcon color="primary" fontSize="small"/>
              </IconButton>
            </Box>

          }
          sx={{
            opacity: isEditable && isEditable !== item.id ? .7 : 1
          }}
        >
          { isEditable === item.id ?
            <TextField 
              type="text"
              size='small' 
              variant="standard" 
              fullWidth
              value={input} 
              onChange= {e => setInput(e.target.value)}
              sx={{
                mx: 2,
                background: "rgba(80,80,80,0.15)",
                '.MuiInputBase-input': { 
                    fontWeight: 300,
                    px: 2,
                    height: 32,
                    fontSize: ".85em",
                  },
              }}
              />
          :
            <ListItemButton role={undefined} onClick={() => finishTodo(item.id)} dense sx={{py: 0}} disabled={isEditable}>
              <ListItemIcon sx={{minWidth: "initial", mr: 1.5}}>
                <Checkbox
                  size="small"
                  edge="start"
                  checked={item.isFinished}
                  // tabIndex={-1}
                  // disableRipple
                  inputProps={{ 'aria-labelledby': item.id}}
                  // sx={{opacity: item.isFinished ? 1 : .35}}
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
    </List>
  )
}

export default TodoList
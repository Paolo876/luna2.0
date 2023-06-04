import React from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { Checkbox, List, ListItem, ListItemButton, ListItemText, Typography, IconButton, ListItemIcon, Box, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';


const TodoList = () => {
  const { items, finishTodo, editTodo, deleteTodo } = useTodoRedux();

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
            <Box>
              <IconButton edge="end" aria-label="comments" sx={{mr: .01, opacity: item.isFinished ? .25 : 1, }} disabled={item.isFinished} >
                <EditIcon color="primary" fontSize="small"/>
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <CloseIcon color="primary" fontSize="small"/>
              </IconButton>
            </Box>

          }
        >
          <ListItemButton role={undefined} onClick={() => finishTodo(item.id)} dense sx={{py: 0}}>
            <ListItemIcon sx={{minWidth: "initial", mr: 1.5}}>
              <Checkbox
                size="small"
                edge="start"
                checked={item.isFinished}
                // tabIndex={-1}
                // disableRipple
                inputProps={{ 'aria-labelledby': item.id}}
                sx={{opacity: item.isFinished ? 1 : .35}}
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
                  opacity: item.isFinished ? .75 : 1,
                  transform: item.isFinished ? "translateX(0.25em)" : "none",
                }}
              >
                {item.text}
              </Typography>} 
            />
            {/* <TextField size='small' variant="standard"/> */}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
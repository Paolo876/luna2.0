import React from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { ButtonBase, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';


const TodoList = () => {
  const { items } = useTodoRedux();
  console.log(items)
  return (
    <List
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        // p: ".5em",
      }}
    >
      {items.map(item => <ListItem key={item.id}>
        
        {/* <ButtonBase sx={{height: "100%", width: "100%", textAlign: "left"}}><Typography variant="body2" textAlign="left">{item.text}</Typography></ButtonBase> */}
      </ListItem>)}
    </List>
  )
}

export default TodoList
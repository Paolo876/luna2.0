import React from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { Checkbox, List, ListItem, ListItemButton, ListItemText, Typography, IconButton, ListItemIcon, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';


const TodoList = () => {
  const { items } = useTodoRedux();
  
  const handleToggle = () => {
    
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
            <Box>
              <IconButton edge="end" aria-label="comments" sx={{mr: .01}}>
                <EditIcon color="primary" fontSize="small"/>
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <CloseIcon color="primary" fontSize="small"/>
              </IconButton>
            </Box>

          }
        >
          <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense sx={{py: 0}}>
            <ListItemIcon sx={{minWidth: "initial", mr: 1.5}}>
              <Checkbox
                size="small"
                edge="start"
                // checked={checked.indexOf(item.id) !== -1}
                // tabIndex={-1}
                // disableRipple
                inputProps={{ 'aria-labelledby': item.id }}
              />
            </ListItemIcon>
            <ListItemText id={item.id} primary={<Typography variant="body2" fontSize={15} letterSpacing={.5} fontWeight={300}>{item.text}</Typography>} />
            {/* <ListItemText id={item.id} primary={item.text} /> */}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
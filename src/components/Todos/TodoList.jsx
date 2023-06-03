import React from 'react'
import useTodoRedux from '../../hooks/useTodoRedux'
import { Stack } from '@mui/material';


const TodoList = () => {
  const { items } = useTodoRedux();
  console.log(items)
  return (
    <Stack
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        p: ".5em",
      }}
    >
    
    </Stack>
  )
}

export default TodoList
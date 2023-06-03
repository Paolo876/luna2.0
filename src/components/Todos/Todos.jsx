import { useRef } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import ComponentContainer from "../UI/ComponentContainer";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { Box, Button } from "@mui/material";


const Todos = () => {
  const ref = useRef();
  const { components, ui } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "todos").addedStyles;
  const { containerColor } = ui;


  return (
    <ComponentContainer
      additionalStyles={{
        top: '52%',
        left: 'inherit',
        right: '1%',
        textAlign: 'left',
        minWidth: '22em',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
        p: 1,
        // bottom: 0,
        background: containerColor,
        ".todos-header": {
          marginTop:' .8em',
          marginBottom: '.4em',
          marginLeft: '.5em',
          fontSize: '1.6em',
        },
        ...addedStyles
      }}
      ref={ref} 
      id="todos"
    >
      <p className="todos-header">My Todo List</p>
      <AddTodoForm/>
      <TodoList/>
      <Box sx={{display: "flex", p: ".5em"}}>
        <Button size="small" variant="contained" sx={{ml: "auto"}}>Clear All</Button>
      </Box>
    </ComponentContainer>
  )
}

export default Todos
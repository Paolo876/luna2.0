import { useRef } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useTodoRedux from "../../hooks/useTodoRedux";
import ComponentContainer from "../UI/ComponentContainer";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { Box, Button } from "@mui/material";


const Todos = () => {
  const ref = useRef();
  const { components, ui } = useSettingsRedux();
  const addedStyles = components.find(item => item.name === "todos").addedStyles;
  const { containerColor } = ui;
  const { clearTodo, items } = useTodoRedux();

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
        // bottom: 1,
        background: containerColor,
        ".todos-header": {
          marginTop:' .4em',
          marginBottom: '.25em',
          marginLeft: '.5em',
          fontSize: '1.35em',
          letterSpacing: 1,
        },
        ...addedStyles
      }}
      ref={ref} 
      id="todos"
    >
      <p className="todos-header">My Todo List</p>
      <AddTodoForm/>
      <TodoList/>
      {items.length !== 0 && <Box sx={{display: "flex", p: ".5em"}}>
        <Button size="small" variant="contained" sx={{ml: "auto"}} onClick={clearTodo}>Clear All</Button>
      </Box>}
    </ComponentContainer>
  )
}

export default Todos
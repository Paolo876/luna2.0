import { useRef } from "react";
import useSettingsRedux from "../../hooks/useSettingsRedux";
import useUiRedux from "../../hooks/useUiRedux";
import useTodoRedux from "../../hooks/useTodoRedux";
import ComponentContainer from "../UI/ComponentContainer";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { Box, Button } from "@mui/material";


const Todos = () => {
  const ref = useRef();
  const { components, editorMode: { isActive }  } = useSettingsRedux();
  const { interface: { containerColor, backdropFilter }} = useUiRedux();
  const addedStyles = components.find(item => item.name === "todos").addedStyles;
  const { clearTodo, items } = useTodoRedux();

  return (
    <ComponentContainer
      additionalStyles={{
        top: '52%',
        left: 'inherit',
        right: '1%',
        textAlign: 'left',
        width: {md: '18em', lg: '22em'},
        textShadow: "1px 1px 2px rgba(0, 0, 0, .8)",
        maxHeight: 400,
        height: isActive ? 400 : "initial",
        display: {xs: "none", md: "flex"},
        flexDirection: "column",
        justifyContent: "flex-start",
        background: containerColor,
        backdropFilter: `blur(${backdropFilter.blur}px) contrast(${backdropFilter.contrast}%) brightness(${backdropFilter.brightness}%)`,
        ".todos-header": {
          marginTop:' .4em',
          marginBottom: '.25em',
          marginLeft: '.5em',
          fontSize: {md: '1.15em', lg: '1.35em'},
          letterSpacing: 1,
        },
        ...addedStyles,
      }}
      ref={ref} 
      id="todos"
    >
      <p className="todos-header">My Todo List</p>
      <AddTodoForm addedStyles={addedStyles}/>
      <TodoList addedStyles={addedStyles}/>
      {items.length !== 0 && <Box sx={{display: "flex", p: ".5em"}}>
        <Button size="small" variant="contained" sx={{ml: "auto"}} onClick={clearTodo}>Clear All</Button>
      </Box>}
    </ComponentContainer>
  )
}

export default Todos
import { createSlice } from "@reduxjs/toolkit";
import generateUID from "../../utils/generate-uid";
import { todosInitialState } from "../initialStates";
const todoSlice = createSlice({
    name: 'todo',
    initialState: { items: todosInitialState() },
    reducers: {
        addTodo(state, { payload }) {
            const updatedItems = [ ...state.items ]
            const newTodo = {text: payload, id: generateUID(), isFinished: false};
            updatedItems.push(newTodo);

            state.items = updatedItems;
            localStorage.setItem('todos', JSON.stringify(updatedItems));
        },
        editTodo(state, action) {
            const item = state.items.find(item => item.id === action.payload.id);
            item.text = action.payload.text;
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        deleteTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        clearTodo(state) {
            state.items = [];
            localStorage.setItem('todos', JSON.stringify(state.items));
        },
        finishTodo(state, action){
            const item = state.items.find(item => item.id === action.payload);
            item.isFinished = !item.isFinished;
            localStorage.setItem('todos', JSON.stringify(state.items));
        }
    }
})

export const todoActions = todoSlice.actions;
export default todoSlice;
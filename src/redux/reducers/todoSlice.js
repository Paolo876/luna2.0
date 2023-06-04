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
        editTodo(state, { payload }) {
            const updatedItems = [ ...state.items ]
            const item = updatedItems.find(item => item.id === payload.id);
            item.text = payload.text;

            state.items = updatedItems;
            localStorage.setItem('todos', JSON.stringify(updatedItems));
        },
        deleteTodo(state, { payload }) {
            const updatedItems = state.items.filter(item => item.id !== payload);

            state.items = updatedItems;
            localStorage.setItem('todos', JSON.stringify(updatedItems));
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
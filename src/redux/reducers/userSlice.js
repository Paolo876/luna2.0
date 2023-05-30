import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../initialStates";

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUserName(state, action){
            state.name = action.payload;
            localStorage.setItem('name', action.payload)
        },

        setBirthday(state, action){
            state.birthday = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state));
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;
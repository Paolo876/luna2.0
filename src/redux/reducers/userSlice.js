import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../initialStates";

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUserName(state, { payload }){
            state.name = payload;
            localStorage.setItem('name', payload)
        },

        setBirthday(state, { payload }){
            state.birthday = payload;
            // localStorage.setItem('userInfo', JSON.stringify(state));
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;
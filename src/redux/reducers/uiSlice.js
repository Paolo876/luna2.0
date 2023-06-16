import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "../initialStates";

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        changeContainerColor(state, { payload }){
            state.interface.containerColor = payload;
            localStorage.setItem('uiConfig', JSON.stringify(state.interface))
        },
        changeBackdrop(state, { payload }){
            const { id, value } = payload;
            const backdropFilter = state.interface.backdropFilter;
            if(id === "blur") backdropFilter.blur = value;
            if(id === "contrast") backdropFilter.contrast = value;
            if(id === "brightness") backdropFilter.brightness = value;

            localStorage.setItem('uiConfig', JSON.stringify(state.interface))
        },
        changePrimaryColor(state, {payload}){
            state.interface.primaryColor = payload;
            localStorage.setItem('uiConfig', JSON.stringify(state.interface))
        },
        toggleHints(state, {payload}){
            state.interface.isHintsEnabled = !state.interface.isHintsEnabled;
            localStorage.setItem('uiConfig', JSON.stringify(state.interface))
        },
    },
});


export const uiActions = uiSlice.actions;
export default uiSlice;
import { createSlice } from "@reduxjs/toolkit";
import { backgroundInitialState } from "../initialStates";
import { fetchBackground } from "./backgroundReducers";

const backgroundSlice = createSlice({
    name: "background",
    initialState: backgroundInitialState,
    reducers: {
        generateLocalBackground( state ){
            const selectedBackground = state.localBackgrounds[Math.floor(Math.random() * 5) ]      //choose random bg
            state.activeLocalBackground = selectedBackground;
            state.src = selectedBackground.src;
            state.isLocal = true;
            state.isRandom = true;
        },
        setBackground(state){
            state.isRandom = false;    
            localStorage.setItem('backgroundConfig', JSON.stringify(state))
        },
        removeBackground(state){
            state.isRandom = true;
            // state.source = null;
            localStorage.setItem('backgroundConfig', JSON.stringify(state))
        },
        setIsLocalBackground(state, { payload }){
            if(payload !== state.isLocal){
                state.isRandom = true;
                state.isLocal = payload;
                localStorage.setItem('backgroundConfig', JSON.stringify(state))
            }
        },
        selectLocalBackground(state, { payload }){
            // state.isRandom = true;
            // state.activeLocalBackground = payload;
            state.src = payload.src
            // localStorage.setItem('backgroundConfig', JSON.stringify(state))

        },
        changeFilter(state, {payload}){
            const filters = state.filter;

            if(payload.id === "brightness") filters.brightness = payload.value;  
            if(payload.id === "contrast") filters.contrast = payload.value;
            if(payload.id === "saturation") filters.saturation = payload.value;
            if(payload.id === "reset") state.filter = { brightness: 100, contrast: 100, saturation: 100 };
        
            localStorage.setItem('backgroundConfig', JSON.stringify(state))

        },
    }, 
    extraReducers: (builder) => {
        builder
        // fetchBackground
        .addCase(fetchBackground.pending, ( state ) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchBackground.fulfilled, ( state, { payload }) => {
            state.src = payload;
            state.isRandom = true;
            state.isLocal = false;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchBackground.rejected, ( state , { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        })
    }
})

export const backgroundActions = backgroundSlice.actions;
export default backgroundSlice;
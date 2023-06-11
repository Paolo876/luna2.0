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
            state.src = selectedBackground.url;
            state.isLocal = true;
            state.isRandom = true;
        },
        // setBackground(state, {payload = true}){
        //     state.isRandom = !payload;    
        //     localStorage.setItem('backgroundConfig', JSON.stringify(state))
        // },
        // removeBackground(state){
        //     state.isRandom = true;
        //     state.source = null;
        //     localStorage.setItem('backgroundConfig', JSON.stringify(state))
        // },
        setIsLocalBackground(state, { payload }){
            if(payload !== state.isLocal){
                state.isRandom = true;
                state.isLocal = payload;
                localStorage.setItem('backgroundConfig', JSON.stringify(state))
            }
        },
        selectLocalBackground(state, { payload }){
            console.log(payload)
            state.activeLocalBackground = payload;
            // localStorage.setItem('backgroundConfig', JSON.stringify(state))

        },
        // setFetchedBackground(state, {payload}){
        //     state.source = payload
        // },
        // changeFilter(state, {payload}){
        //     const filters = state.filter;

        //     if(payload.id === "brightness") filters.brightness = payload.value;  
        //     if(payload.id === "contrast") filters.contrast = payload.value;
        //     if(payload.id === "saturate") filters.saturate = payload.value;
        //     if(payload.id === "reset") state.filter = initialConfigurations("background").filter;
        
        //     localStorage.setItem('backgroundConfig', JSON.stringify(state))

        // },
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
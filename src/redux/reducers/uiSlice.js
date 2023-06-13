import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "../initialStates";

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        // // editor mode
        // toggleEditorMode(state, {payload}){
        //     state.editorMode.isActive = payload;
        //     state.editorMode.changeComponentPosition = [];
   
        // },
        // changeComponentPosition(state, { payload }){
        //     const index = state.editorMode.changeComponentPosition.findIndex(item => item.id === payload.id);
        //     if(index === -1) {
        //         state.editorMode.changeComponentPosition.push(payload);
        //     } else {
        //         state.editorMode.changeComponentPosition[index].transform = payload.transform;
        //     }
        // },
        // saveComponentPositions(state){
        //     const updatedComponents = state.editorMode.changeComponentPosition;

        //     updatedComponents.forEach(item => {
        //         const index = state.components.findIndex(i => i.name === item.id);
        //         if(index !== -1){
        //             state.components[index].addedStyles.transform = item.transform;
        //         }
        //     })
        //     state.editorMode.changeComponentPosition = [];
        //     state.editorMode.isActive = false;
        //     localStorage.setItem('componentsConfig', JSON.stringify(state.components));

        // },
        // resetComponentPositions(state){
        //     state.components.forEach(item => delete item.addedStyles.transform);
        //     state.editorMode.isActive = false;
        //     state.editorMode.changeComponentPosition = []
        //     localStorage.setItem('componentsConfig', JSON.stringify(state.components));

        // },
        // // UI

        changeContainerColor(state, {payload}){
            const colors = payload.color.substr(0, payload.color.length - 1).substr(4)
            const [ r, g, b ] = colors.split(",")
            console.log(r, g ,b )
            const value = `linear-gradient(rgba(${r}, ${g}, ${b}, ${payload.alpha}), rgba(${r}, ${g}, ${b}, ${payload.alpha}))`;
            state.interface.containerColor = value;
            localStorage.setItem('uiConfig', JSON.stringify(state.interface))
        },
        // changeSettingsButtonPosition(state, {payload}){
        //     state.ui.settingsPosition = payload;
        //     localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        // },
        // changePrimaryColor(state, {payload}){
        //     state.ui.primaryColor = payload;
        //     localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        // },
        // toggleHintsModal(state, {payload}){
        //     state.ui.isHintsShown = payload;
        //     localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        // },
        // resetUISettings(state){
        //     state.ui = initialConfigurations("ui");
        //     localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        // },
    },
});


export const uiActions = uiSlice.actions;
export default uiSlice;
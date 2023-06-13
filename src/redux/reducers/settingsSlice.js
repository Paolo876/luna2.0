import { createSlice } from "@reduxjs/toolkit";
import { settingsInitialState, componentsInitialState } from "../initialStates";


const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsInitialState,
    reducers: {
        // components
        setIsVisible(state, { payload }){
            const updatedComponents = [ ...state.components ];
            const component = updatedComponents.find(item => item.name === payload);
            component.isVisible = !component.isVisible;

            state.components = updatedComponents
            localStorage.setItem('components', JSON.stringify(updatedComponents));
        },
        toggleGeolocation(state, { payload }){
            state.isGeolocationAllowed = payload;
            localStorage.setItem('isGeolocationAllowed', JSON.stringify(state.isGeolocationAllowed))
        },
        changeTimeFormat(state, { payload }) {
            state.timeFormat = payload;
            localStorage.setItem('timeFormat', payload)
        },
        changeTemperatureUnit(state, { payload }) {
            state.temperatureUnit = payload;
            localStorage.setItem('temperatureUnit', payload)
        },
        changeDateFormat(state, { payload }) {
            state.dateFormat = payload;
            localStorage.setItem('dateFormat', payload)
        },
        changeDateOptions(state, { payload }) {
            const { item, value } = payload;
            const updatedDateOptions = {...state.dateOptions};

            if(value === "hidden"){
                updatedDateOptions[item] = undefined;
            } else {
                updatedDateOptions[item] = value;
            }
            state.dateOptions = updatedDateOptions;
            localStorage.setItem("dateOptions", JSON.stringify(updatedDateOptions));
        },
        changeStyle(state, { payload }){
            const component = state.components.find(item => item.name === payload.name);

            if(!component.addedStyles)      component.addedStyles = {};
            if(payload.id === "font")       component.addedStyles.fontFamily = payload.value;
            if(payload.id === "weight")     component.addedStyles.fontWeight = payload.value;
            if(payload.id === "color")      component.addedStyles.color = payload.value;
            if(payload.id === "opacity")    component.addedStyles.opacity = payload.value;

            localStorage.setItem('componentsConfig', JSON.stringify(state.components));
        },
        resetStyle(state, {payload}){
            const defaultValues = componentsInitialState.find(item => item.name === payload);
            const component = state.components.find(item => item.name === payload);

            component.addedStyles = defaultValues.addedStyles

            localStorage.setItem('componentsConfig', JSON.stringify(state.components))
        },
        // // editor mode
        // toggleEditorMode(state, {payload}){
        //     state.editorMode.isActive = payload;
        //     state.editorMode.changeComponentPosition = [];
   
        // },
        changeComponentPosition(state, { payload }){
            const index = state.editorMode.changeComponentPosition.findIndex(item => item.id === payload.id);
            if(index === -1) {
                state.editorMode.changeComponentPosition.push(payload);
            } else {
                state.editorMode.changeComponentPosition[index].transform = payload.transform;
            }
        },
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

        // changeContainerColor(state, {payload}){
        //     // const colors = payload.color.substr(0, payload.color.length - 1).substr(4)
        //     // const [ r, g, b ] = colors.split(",")
        //     // // console.log(r, g ,b )
        //     // const value = `linear-gradient(rgba(${colors}, ${payload.alpha}), rgba(${colors}, ${payload.alpha}))`;
        //     // console.log(value)
        //     // state.ui.containerColor = value;
        //     // // localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        //     const colors = payload.color
        //     const value = `linear-gradient(rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}), rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}))`;
        //     // console.log(colors)
        //     // state.ui.containerColor = value;
        //     // localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        // },
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
        //CLEAR SETTINGS
        clearAllSettings(state){
            localStorage.clear();
            window.location.reload();
        },
    },
});


export const settingsActions = settingsSlice.actions;
export default settingsSlice;
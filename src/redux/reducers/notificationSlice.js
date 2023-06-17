import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name: "notification",
    initialState: { snackbarData: null},
    reducers: {
        triggerSnackbar: (state, { payload }) => {
            state.snackbarData = payload;
        },
        clearSnackbar: (state) => {
            state.snackbarData = null;
        },
        // addNotification: (state, { payload }) => {
        //     const updatedNotifications = state.notifications;
        //     const existingItem = updatedNotifications.find(item => item.id === payload.id)

        //     if(existingItem) {
        //         if(payload.type === "like" && !payload.isLiked){
        //             updatedNotifications.splice(updatedNotifications.indexOf(updatedNotifications.find(item => parseInt(item.id) === parseInt((payload.id)))), 1)
        //         } else {
        //             existingItem.updatedAt = payload.updatedAt
        //             updatedNotifications.unshift(updatedNotifications.splice(updatedNotifications.indexOf(existingItem), 1)[0]) //move to first     
        //         }
        //         state.notifications = updatedNotifications;
        //     } else {
        //         if(!(payload.type === "like" && !payload.isLiked)) state.notifications = [payload, ...updatedNotifications]
        //     };
        // },
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;

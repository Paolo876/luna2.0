import { configureStore } from '@reduxjs/toolkit'; 
import userSlice from './reducers/userSlice';
import settingsSlice from './reducers/settingsSlice';
import backgroundSlice from "./reducers/backgroundSlice";
import todoSlice from './reducers/todoSlice';
import uiSlice from './reducers/uiSlice';

const store = configureStore({
  reducer: {  
    user: userSlice.reducer, 
    settings: settingsSlice.reducer, 
    background: backgroundSlice.reducer,
    todos: todoSlice.reducer, 
    ui: uiSlice.reducer,
    // bookmarks: bookmarksSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export default store;
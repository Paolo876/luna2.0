import { configureStore } from '@reduxjs/toolkit'; 
import userSlice from './reducers/userSlice';
import settingsSlice from './reducers/settingsSlice';
import backgroundSlice from "./reducers/backgroundSlice";

// import bookmarksSlice from './bookmarksSlice';
// import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {  
    user: userSlice.reducer, 
    settings: settingsSlice.reducer, 
    background: backgroundSlice.reducer,
    // todos: todoSlice.reducer, 
    // bookmarks: bookmarksSlice.reducer
  }
});

export default store;
import { configureStore } from '@reduxjs/toolkit'; 
import userSlice from './reducers/userSlice';
import settingsSlice from './reducers/settingsSlice';
// import bookmarksSlice from './bookmarksSlice';
// import backgroundSlice from "./backgroundSlice";
// import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {  
    user: userSlice.reducer, 
    settings: settingsSlice.reducer, 

    // background: backgroundSlice.reducer,
    // todos: todoSlice.reducer, 
    // bookmarks: bookmarksSlice.reducer
  }
});

export default store;
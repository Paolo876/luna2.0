import { configureStore } from '@reduxjs/toolkit'; 
import userSlice from './reducers/userSlice';
// import settingsSlice from './settingsSlice';
// import bookmarksSlice from './bookmarksSlice';
// import backgroundSlice from "./backgroundSlice";
// import todoSlice from './todoSlice';

const store = configureStore({
  reducer: {  
    user: userSlice.reducer, 
    // background: backgroundSlice.reducer,
    // todos: todoSlice.reducer, 
    // settings: settingsSlice.reducer, 
    // bookmarks: bookmarksSlice.reducer
  }
});

export default store;
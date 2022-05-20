// Imports
import { combineReducers } from "@reduxjs/toolkit";

// Import reducers 
import tasksReducer from "./tasks/reducer";
import themeReducer from "./theme/reducer";

// Combining all the reducers and exporting
export default combineReducers({
    // Task reducer
    tasksState: tasksReducer,
    // contains the theme state for the app.
    themeState: themeReducer
});
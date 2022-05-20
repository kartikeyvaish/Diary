// Imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// Import the combined reducers
import rootReducer from "./reducer";

// Create a final persisted reducer
const persistedReducer = persistReducer(
    {
        key: "root",
        storage: AsyncStorage,
    },
    rootReducer
);

// Export the Created Store
export const store = configureStore({ reducer: persistedReducer, middleware: (middleware) => middleware({ serializableCheck: false }) });

// Export the Persistor
export const persistor = persistStore(store);
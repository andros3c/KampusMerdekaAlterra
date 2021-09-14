import { combineReducers } from "redux";
import { olahData } from "./olahdata";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";


const reducers=combineReducers({
    data: olahData
})

const persistConfig={
    key:'root',
    storage
};


const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({reducer : persistedReducer})
const persistor = persistStore(store)


export{store,persistor}
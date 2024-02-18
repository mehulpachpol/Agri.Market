import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
import storage from "redux-persist/lib/storage";
import { persistReducer ,persistStore} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })



const persistConfig = {
    key:"root",
    version : 1,
    storage
};

const reducer = combineReducers({
    rootReducers,
});

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
   // reducer: persistedReducer,
   reducer:rootReducers,
 //  middleware:customizedMiddleware,

})

export default store;
//export const persistor = persistStore(store);


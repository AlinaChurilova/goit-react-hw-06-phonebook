import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './reducer';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger];

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig, phonebookReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const variablesStore = { store, persistor };
export default variablesStore;
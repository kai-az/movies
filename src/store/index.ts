import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { filmFilterReducer } from './filmFilterReducer';
import { checkboxFilterReducer } from './checkboxFilterReducer';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';
import { userCollectionReducer } from './userCollectionReducer'


const rootReducer = combineReducers({
    filmFilterReducer: filmFilterReducer,
    checkboxFilterReducer: checkboxFilterReducer,
    modalReducer: modalReducer,
    authReducer: authReducer,
    userCollection: userCollectionReducer
})

export const store = createStore(rootReducer);

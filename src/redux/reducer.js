import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './actions';

export const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        const savedName = state && state.find(Cont => Cont.name === payload.name);
        if (savedName !== undefined) {
            alert(`${payload.name} is already in contacts!`);
            return state;
        } else {
            return [...state, payload]
        }
    },
    [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
   [actions.changeFilter]: (_, {payload}) => payload, 
})

export default combineReducers({
    items,
    filter
})
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
console.log(increment)

const myReducer = createReducer(null, {})

export const store = configureStore({
    reducer: {
        myValue: myReducer
    }
});
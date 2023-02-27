import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ourReducers from "./reducers";

const reducer = combineReducers({
    root: ourReducers
})

// const middleware = applyMiddleware(thunk);


export const store = configureStore({
    reducer,
    // middleware

})

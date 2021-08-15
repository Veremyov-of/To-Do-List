// import reducer from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import mainReducer from './mainReducer';
import todoPercent from './todoPercent';
const rootReducer = combineReducers({
    mainReducer,
    todoPercent
})
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
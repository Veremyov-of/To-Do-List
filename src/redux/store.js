// import reducer from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import mainReducer from './mainReducer';
// import todoReducer from './todoReducer';
const rootReducer = combineReducers({
    mainReducer,
    // todoReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
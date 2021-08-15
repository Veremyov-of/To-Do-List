// import reducer from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import mainReducer from './mainReducer';
const rootReducer = combineReducers({
    mainReducer,
})
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
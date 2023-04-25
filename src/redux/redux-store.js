import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import newsReducer from './newsReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
})

let store = legacy_createStore(reducers);

window.store = store;

export default store;

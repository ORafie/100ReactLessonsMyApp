import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import newsReducer from './newsReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    newsPage: newsReducer
})

let store = createStore(reducers);



export default store;

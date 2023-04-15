import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import newsReducer from "./newsReducer";

let store = {
    _subscriber() {
        console.log('no subscribers(observers)')
    },
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'hi! hi! hi!' },
                { id: 2, post: 'hello world!' },
                { id: 3, post: "how are you? let's walk together" },
                { id: 4, post: 'have a nice day' },
                { id: 5, post: 'finally spring! everything is blossoming!' },
                { id: 6, post: 'where are you?' },
                { id: 7, post: 'changes! welcome!' },
            ],
            newTextForPostData: ''
        },
        messagesPage: {
            usersData: [
                { id: 1, name: 'User 1', friend: 'true', fav: 'true' },
                { id: 2, name: 'User 2', friend: 'false', fav: 'false' },
                { id: 3, name: 'User 3', friend: 'false', fav: 'false' },
                { id: 4, name: 'User 4', friend: 'true', fav: 'true' },
                { id: 5, name: 'User 5', friend: 'true', fav: 'true' },
            ],
            textData: [
                { id: 1, text: 'Hello world!' },
                { id: 2, text: 'Where have you been!' },
                { id: 3, text: 'Glad to see you again!' },
            ],
            newMessageForTextData: ''
        },
        newsPage: {
            newsData: [
                { id: 1, article: 'About earthquakes' },
                { id: 2, article: 'Summer is coming!' },
                { id: 3, article: 'How many languages do you know?' },
            ],
            newTextForNewsData: ''
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        console.log(action)
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._callSubscriber(this._state);
    }
};


// let a = {
//     run() {
//         return store.getState();
//     }
// };
// console.log(store.getState());
// console.log(a.run());

window.store = store;
export default store;

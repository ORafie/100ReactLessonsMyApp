const ADD_POST = 'ADD_POST';
const UPDATE_POST_DATA = 'UPDATE_POST_DATA';
const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEWS_DATA = 'UPDATE_NEWS_DATA';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_DATA = 'UPDATE_TEXT_DATA';

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
    _addPost() {
        let newPost = {
            id: this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id + 1,
            post: this._state.profilePage.newTextForPostData,
        }
        console.log(11)
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newTextForPostData = '';
        this._callSubscriber(this._state);
    },
    _updatePostData(newText) {
        console.log(22)
        this._state.profilePage.newTextForPostData = newText;
        this._callSubscriber(this._state);
    },
    _addNews() {
        let newArticle = {
            id: this._state.newsPage.newsData[this._state.newsPage.newsData.length - 1].id + 1,
            article: this._state.newsPage.newTextForNewsData,
        }
        console.log(3)
        this._state.newsPage.newsData.push(newArticle);
        this._state.newsPage.newTextForNewsData = '';
        this._callSubscriber(this._state);
    },
    _updateNewsData(newTextNews) {
        console.log(4)
        this._state.newsPage.newTextForNewsData = newTextNews;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: this._state.messagesPage.textData[this._state.messagesPage.textData.length - 1].id + 1,
            text: this._state.messagesPage.newMessageForTextData,
        }
        console.log(5, newMessage)
        this._state.messagesPage.textData.push(newMessage);
        this._state.messagesPage.newMessageForTextData = '';
        this._callSubscriber(this._state);
    },
    _updateTextData(newMessageText) {
        console.log(6)
        this._state.messagesPage.newMessageForTextData = newMessageText;
        this._callSubscriber(this._state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            this._addPost();
        } else if (action.type === 'UPDATE_POST_DATA') {
            this._updatePostData(action.newText);
        } else if (action.type === 'ADD_NEWS') {
            this._addNews();
        } else if (action.type === 'UPDATE_NEWS_DATA') {
            this._updateNewsData(action.newTextNews);
        } else if (action.type === 'ADD_MESSAGE') {
            this._addMessage();
        } else if (action.type === 'UPDATE_TEXT_DATA') {
            this._updateTextData(action.newMessageText);
        }
    }
};

export const addPospActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
};

export const updatePostDataActionCreator = (newText) => {
    return {
        type: 'UPDATE_POST_DATA', newText: newText
    }
};

export const addNewsActionCreator = () => {
    return {
        type: 'ADD_NEWS'
    }
};

export const updateNewsDataActionCreator = (newTextNews) => {
    return {
        type: 'UPDATE_NEWS_DATA', newTextNews: newTextNews
    }
}
export const addMessageActionCreator = () => {
    return {
        type: 'ADD_MESSAGE'
    }
};

export const updateTextDataActionCreator = (newMessageText) => {
    return {
        type: 'UPDATE_TEXT_DATA', newMessageText: newMessageText
    }
}
// let a = {
//     run() {
//         return store.getState();
//     }
// };
// console.log(store.getState());
// console.log(a.run());

window.store = store;
export default store;


// addNews() {
//     const lastNews = this._state.newsPage.newsData[this._state.newsPage.newsData.length - 1];
//     const newNewsId = lastNews.id + 1;
//     const newArticleText = this._state.newsPage.newTextForNewsData;
//     const newArticle = { id: newNewsId, news: newArticleText };
//     this._state.newsPage.newsData.push(newArticle);
//     this._state.newsPage.newTextForNewsData = '';
//     rerenderEntireTree(this._state);

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
            ]
        },
        newsPage: {
            newsData: [
                { id: 1, article: 'About earthquakes' },
                { id: 2, article: 'Summer is coming!' },
                { id: 3, article: 'How many languages do you know?' },
            ],
            newTextForNewsData: ''
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    _addPost() {
        let newPost = {
            id: this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id + 1,
            post: this._state.profilePage.newTextForPostData,
        }
        console.log(1)
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newTextForPostData = '';
        this._callSubscriber(this._state);
    },
    _updatePostData(newText) {
        console.log(2)
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
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-POST-DATA') {
            this._updatePostData(action.newText);
        } else if (action.type === 'ADD-NEWS') {
            this._addNews();
        } else if (action.type === 'UPDATE-NEWS-DATA') {
            this._updateNewsData(action.newTextNews);
        }
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


// addNews() {
//     const lastNews = this._state.newsPage.newsData[this._state.newsPage.newsData.length - 1];
//     const newNewsId = lastNews.id + 1;
//     const newArticleText = this._state.newsPage.newTextForNewsData;
//     const newArticle = { id: newNewsId, news: newArticleText };
//     this._state.newsPage.newsData.push(newArticle);
//     this._state.newsPage.newTextForNewsData = '';
//     rerenderEntireTree(this._state);
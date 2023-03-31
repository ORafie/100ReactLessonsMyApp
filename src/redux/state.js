let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
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
        newTextForPostData: 'new text from a user'
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
            { id: 1, news: 'About earthquakes' },
            { id: 2, news: 'Summer is coming!' },
            { id: 3, news: 'How many languages do you know?' },
        ],
        newTextForNewsData: 'new text from a user'
    }
}

export const addPost = () => {
    debugger
    let newPost = {
        id: state.profilePage.postData[state.profilePage.postData.length - 1].id + 1,
        post: state.profilePage.newTextForPostData,
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newTextForPostData = '';
    rerenderEntireTree(state);
}

export const updatePostData = (newText) => {
    state.profilePage.newTextForPostData = newText;
    rerenderEntireTree(state);
}

export const addNews = () => {
    debugger
    let newArticle = {
        id: state.newsPage.newsData[state.newsPage.newsData.length - 1].id + 1,
        post: state.newsPage.newTextForNewsData,
    }
    state.newsPage.newsData.push(newArticle);
    state.newsPage.newTextForNewsData = '';
    rerenderEntireTree(state);
}

export const updateNewsData = (newTextNews) => {
    state.newsPage.newTextForNewsData = newTextNews;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
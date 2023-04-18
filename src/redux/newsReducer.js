const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEWS_DATA = 'UPDATE_NEWS_DATA';

let initialState = {
    newsData: [
        { id: 1, article: 'About earthquakes' },
        { id: 2, article: 'Summer is coming!' },
        { id: 3, article: 'How many languages do you know?' },
    ],
    newTextForNewsData: ''
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            let newArticle = {
                id: state.newsData[state.newsData.length - 1].id + 1,
                article: state.newTextForNewsData,
            }
            state.newsData.push(newArticle);
            state.newTextForNewsData = '';
            return state;
        case UPDATE_NEWS_DATA:
            state.newTextForNewsData = action.newTextNews;
            return state;
        default:
            return state;
    }

}
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

export default newsReducer

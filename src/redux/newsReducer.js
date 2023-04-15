const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEWS_DATA = 'UPDATE_NEWS_DATA';

const newsReducer = (state, action) => {
    if (action === 'ADD_NEWS') {
        let newArticle = {
            id: state.newsData[state.newsData.length - 1].id + 1,
            article: state.newTextForNewsData,
        }
        console.log(3)
        state.newsData.push(newArticle);
        state.newTextForNewsData = '';
        //this._addNews();
    } else if (action === 'UPDATE_NEWS_DATA') {
        console.log(4)
        state.newTextForNewsData = action.newTextNews;
        //this._updateNewsData(action.newTextNews);
    }
    return state;
}

export default newsReducer

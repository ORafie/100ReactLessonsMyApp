import React from 'react';
import MyNews from './News';
import { addNewsActionCreator, updateNewsDataActionCreator } from '../../redux/newsReducer';

const MyNewsContainer = (props) => {
    console.log(props)
    
    let state = props.store.getState()
 
    let submitNews = () => {
        props.store.dispatch(addNewsActionCreator());
    }
    
    let onNewsChange = (newTextNews) => {
        let action = updateNewsDataActionCreator(newTextNews);
        props.store.dispatch(action);
    }

    return (
        <MyNews
            addNews={submitNews}
            updateNewsData={onNewsChange}
            newsData={state.newsPage.newsData}
            newTextForNewsData={state.newsPage.newTextForNewsData}
        />
    )
}

export default MyNewsContainer;

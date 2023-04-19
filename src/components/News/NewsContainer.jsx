import React from 'react';
import MyNews from './News';
import { addNewsActionCreator, updateNewsDataActionCreator } from '../../redux/newsReducer';
import StoreContext from '../../store-context';

const MyNewsContainer = () => {
 
    return <StoreContext.Consumer>
            { store => {
                //let state = props.store.getState()
                let submitNews = () => {
                    store.dispatch(addNewsActionCreator());
                }    
                let onNewsChange = (newTextNews) => {
                    //let action = updateNewsDataActionCreator(newTextNews);
                    store.dispatch(updateNewsDataActionCreator(newTextNews));
                }
                return <MyNews
                    addNews={submitNews}
                    updateNewsData={onNewsChange}
                    newsData={store.getState().newsPage.newsData}
                    newTextForNewsData={store.getState().newsPage.newTextForNewsData}
                />
            }}          
        </StoreContext.Consumer>
}

export default MyNewsContainer;

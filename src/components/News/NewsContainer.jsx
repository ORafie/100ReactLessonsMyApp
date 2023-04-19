import React from 'react';
import MyNews from './News';
import { addNewsActionCreator, updateNewsDataActionCreator } from '../../redux/newsReducer';
import { connect } from 'react-redux';
/*
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
*/
let mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData,
        newTextForNewsData: state.newsPage.newTextForNewsData
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator());
         },
        updateNewsData: (newTextNews) => {
            let action = updateNewsDataActionCreator(newTextNews);
            dispatch(action);
        }
    }
} 

const MyNewsContainer = connect(mapStateToProps, mapDispatchToProps)(MyNews);

export default MyNewsContainer;

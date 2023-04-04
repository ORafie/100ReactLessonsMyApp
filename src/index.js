import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

let rerenderEntireTree = (state) => {

    ReactDOM.createRoot(rootElement).render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updatePostData={store.updatePostData.bind(store)}
                addNews={store.addNews.bind(store)}
                updateNewsData={store.updateNewsData.bind(store)}
            />

        </BrowserRouter>
    );
}

// rerenderEntireTree(store.getState.call(store));
rerenderEntireTree(store.getState());
// console.log(123456, store.getState());

store.subscribe(() => {
    // console.log(9999, store.getState());
    rerenderEntireTree(store.getState.call(store));
});

import React from 'react';
import state from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updatePostData, subscribe } from './redux/state';

let root = null;

let rerenderEntireTree = (state) => {
    if (!root) {
        root = ReactDOM.createRoot(document.getElementById('root'));
    }

    root.render(
        <React.StrictMode>
            <App state={state} updatePostData={updatePostData} addPost={addPost} />
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');


let rerenderEntireTree = (state) => {
    console.log(state)

    ReactDOM.createRoot(rootElement).render(
        <BrowserRouter>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}
            //store={store}
            />
        </BrowserRouter>, //document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

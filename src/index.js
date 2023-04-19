import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './store-context';

const rootElement = document.getElementById('root');


let rerenderEntireTree = (state) => {

    console.log(state)

    ReactDOM.createRoot(rootElement).render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, //document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

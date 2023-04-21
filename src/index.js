import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

//const rootElement = document.getElementById('root');


//let rerenderEntireTree = (state) => {

//ReactDOM.createRoot(rootElement).render(
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
// }
// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

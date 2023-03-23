import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, post: 'hi! hi! hi!' },
  { id: 2, post: 'hello world!' },
  { id: 3, post: "how are you? let's walk together" },
  { id: 4, post: 'have a nice day' },
  { id: 5, post: 'finally spring! everything is blossoming!' },
  { id: 6, post: 'where are you?' },
  { id: 7, post: 'changes! welcome!' },
]

let usersData = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
  { id: 5, name: 'User 5' },
]

let textData = [
  { id: 1, text: 'Hello world!' },
  { id: 2, text: 'Where have you been!' },
  { id: 3, text: 'Glad to see you again!' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} usersData={usersData} textData={textData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

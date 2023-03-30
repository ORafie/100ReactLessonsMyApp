import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updatePostData } from './redux/state';

let root = null;

export let rerenderEntireTree = (state) => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }

  root.render(
    <React.StrictMode>
      <App state={state} updatePostData={updatePostData} addPost={addPost} />
    </React.StrictMode>
  );
}

// export let rerenderEntireTree = (state) => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <App state={state} updatePostData={updatePostData} addPost={addPost} />
//     </React.StrictMode>
//   );
// }
//import classes from './MyPosts.module.css'
import MyPosts from './MyPosts';
import React from 'react';
import { addPospActionCreator, updatePostDataActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../store-context';

const MyPostsContainer = () => { 
   
    return <StoreContext.Consumer>
            { store => {
                //let state = store.getState().profilePage;                
                let submitPost = () => {
                    store.dispatch(addPospActionCreator());
                }
                let onPostChange = (newText) => {
                    //let action = updatePostDataActionCreator(newText);
                    store.dispatch(updatePostDataActionCreator(newText));
                }
                return <MyPosts
                    addPost={submitPost}
                    updatePostData={onPostChange}
                    postData={store.getState().profilePage.postData}
                    newTextForPostData={store.getState().profilePage.newTextForPostData}
                />
            }}
        </StoreContext.Consumer>
}

export default MyPostsContainer;

// function a1() {
//     //some code
// }
// const a2 = () => {
//     //some code
// }
// function b1(arg1) {
//     return arg1 * 2
// }
// const b2 = (arg1) => {
//     return arg1 * 2
// }
// const b3 = (arg1) => arg1 * 2; 
// console.log(b2(25), b1(35), a2(15), a1(10), b3(5))

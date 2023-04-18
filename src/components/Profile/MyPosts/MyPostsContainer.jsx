//import classes from './MyPosts.module.css'
import MyPosts from './MyPosts';
import React from 'react';
import { addPospActionCreator, updatePostDataActionCreator } from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
    //debugger
    let state = props.store.getState();
    
    let submitPost = () => {
        props.store.dispatch(addPospActionCreator());
    }

    let onPostChange = (newText) => {     
        let action = updatePostDataActionCreator(newText);
        props.store.dispatch(action);
    }
 
    return (
        <MyPosts
            addPost={submitPost}
            updatePostData={onPostChange}
            postData={state.profilePage.postData}
            newTextForPostData={state.profilePage.newTextForPostData}
        />)
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

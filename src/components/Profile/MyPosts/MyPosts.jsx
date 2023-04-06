import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPospActionCreator } from '../../../redux/store';
import { updatePostDataActionCreator } from '../../../redux/store';

const MyPosts = (props) => {
    console.log(('myPosts'), props)
    let posts = props.profilePage.postData.map(post => <Post key={post.id} message={post.post} />)

    let newPost = React.createRef();

    let submitPost = () => {
        props.dispatch(addPospActionCreator());
        newPost.current.value = '';
    }

    let onPostChange = () => {     
        let newText = newPost.current.value;
        let action = updatePostDataActionCreator(newText);
        props.dispatch(action);
    }
 
    return (
        <div className={classes.masonry}>
            <h3>New post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPost}
                value={props.newTextForPostData} 
                />
            </div>
            <div>
                <button onClick={submitPost}>Add post</button>
                
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;

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

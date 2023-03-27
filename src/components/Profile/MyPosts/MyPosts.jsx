import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let posts = props.postData.map( post => <Post message={post.post} />)

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        alert(text);
    }

    return (
        <div className={classes.masonry}>
            <h3>New posts</h3>
            <div>
                <textarea ref={newPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;
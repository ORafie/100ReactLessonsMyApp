import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    
    let posts = props.postData.map(post => <Post message={post.post} key={post.id} />)

    let newPost = React.createRef();

    let addPost = () => {

             let text = newPost.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.masonry}>
            <h3>New post</h3>
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
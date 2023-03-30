import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    
    let posts = props.postData.map(post => <Post message={post.post} key={post.id} />)

    let newPost = React.createRef();

    let addPost = () => {           
        props.addPost();
    }

    let onPostChange = () => {     
        let newText = newPost.current.value;
        props.updatePostData(newText);
    }
 
    return (
        <div className={classes.masonry}>
            <h3>New post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPost}></textarea>
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
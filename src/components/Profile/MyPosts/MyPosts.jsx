import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.postData.map( post => <Post message={post.post} />)

    return (
        <div className={classes.masonry}>
            <h3>New posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>New posts</div>
            <div className={classes.masonry}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;
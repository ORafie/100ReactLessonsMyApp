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
                <Post message='hi! hi! hi!' />
                <Post message='hello world' />
                <Post message='how are you' />
                <Post message='have a nice day' />
            </div>
        </div>
    )
}

export default MyPosts;
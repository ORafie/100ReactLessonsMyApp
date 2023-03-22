import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='hi! hi! hi!' />
                <Post message='hello world!' />
                <Post message="how are you? let's walk together" />
                <Post message='have a nice day' />
                <Post message='finally spring! everything is blossoming!' />
                <Post message='where are you?' />
                <Post message='changes! welcome!' />
            </div>
        </div>
    )
}

export default MyPosts;
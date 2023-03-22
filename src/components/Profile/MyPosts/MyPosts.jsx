import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { id: 1, post: 'hi! hi! hi!' },
        { id: 2, post: 'hello world!' },
        { id: 3, post: "how are you? let's walk together" },
        { id: 4, post: 'have a nice day' },
        { id: 5, post: 'finally spring! everything is blossoming!' },
        { id: 6, post: 'where are you?' },
        { id: 7, post: 'changes! welcome!' },
    ]
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
                <Post message={postData[0].post} />
                <Post message={postData[1].post} />
                <Post message={postData[2].post} />
                <Post message={postData[3].post} />
                <Post message={postData[4].post} />
                <Post message={postData[5].post} />
                <Post message={postData[6].post} />
            </div>
        </div>
    )
}

export default MyPosts;
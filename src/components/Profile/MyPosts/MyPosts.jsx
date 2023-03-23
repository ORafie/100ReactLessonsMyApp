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
    let posts = postData.map( post => <Post message={post.post} />)

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
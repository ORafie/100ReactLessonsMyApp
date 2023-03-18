    import classes from './Post.module.css'

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
            {props.message}
            <div>
                <span>like</span>
            </div>
            </div>
    )
}

export default Post;
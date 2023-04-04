import LikeCounter from '../LikeCounter/LikeCounter';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' alt='description'/>
            {props.message}
            <div className='counter'>
                <LikeCounter  />              
            </div>
        </div>
    )
}

export default Post;



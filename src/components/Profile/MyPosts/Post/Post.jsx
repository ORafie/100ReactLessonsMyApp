import { type } from '@testing-library/user-event/dist/type';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
            {props.message}
            <div>
                <button className='counter'>like</button>
            </div>
        </div>
    )
}

const button = document.querySelectorAll('.counter');
let count;

button.addEventListener('click', () => {
    count = + 1;
});

export default Post;
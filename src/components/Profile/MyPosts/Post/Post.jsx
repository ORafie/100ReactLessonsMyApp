import { type } from '@testing-library/user-event/dist/type';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
            {props.message}
            <div className='counter'>
                <button className='counter__btn' data-direction='plus'>like</button>
                <input type='text' value='0' className='counter__value' />
            </div>
        </div>
    )
}

const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
    btn.addEventListener( 'click',
        function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement
                .querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;
            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else {

            }
            inp.value = newValue;
    })
})


export default Post;
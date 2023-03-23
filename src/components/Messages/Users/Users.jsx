import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let path = '/messages/' + props.id;

    return <div className={classes.user}>
        <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined} >{props.name}</NavLink>
        <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
}


export default User;
import classes from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let path = '/messages/' + props.id;

    return <div className={classes.user}>
        <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined} >{props.name}</NavLink>
        <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
}

const Text = (props) => {
    return <div className={classes.text}>{props.text}</div>
}

const Messages = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                <User name='User 1' id='1' />
                <User name='User 2' id='2' />
                <User name='User 3' id='3' />
                <User name='User 4' id='4' />
                <User name='User 5' id='5' />
            </div>
            <div className={classes.texts}>
                <Text text='Hello world!' />
                <Text text='Where have you been!' />
                <Text text='Glad to see you again!' />
            </div>
        </div>
            
    )
}

export default Messages;
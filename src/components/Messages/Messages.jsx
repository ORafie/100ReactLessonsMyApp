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
    let usersData = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
    ]
    let textData = [
        { id: 1, text: 'Hello world!' },
        { id: 2, text: 'Where have you been!' },
        { id: 3, text: 'Glad to see you again!' },
    ]
    let users = usersData.map( user => <User name={user.name} id={user.id} />); 
    let texts = textData.map( text => <Text text={text.text} />)
        
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {users}
            </div>
            <div className={classes.texts}>
                {texts}
            </div>
        </div>
            
    )
}

export default Messages;
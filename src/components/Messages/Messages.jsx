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
    let messagesData = [
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
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                <User name={messagesData[0].name} id={messagesData[0].id} />
                <User name={messagesData[1].name} id={messagesData[1].id} />
                <User name={messagesData[2].name} id={messagesData[2].id} />
                <User name={messagesData[3].name} id={messagesData[3].id} />
                <User name={messagesData[4].name} id={messagesData[4].id} />
            </div>
            <div className={classes.texts}>
                <Text text={textData[0].text} />
                <Text text={textData[1].text} />
                <Text text={textData[2].text} />
            </div>
        </div>
            
    )
}

export default Messages;
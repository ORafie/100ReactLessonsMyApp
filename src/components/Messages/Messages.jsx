import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';

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

    let Users = usersData.map( user => <User name={user.name} id={user.id} />); 
    let Texts = textData.map(text => <Text text={text.text} />)
    
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {Users}
            </div>
            <div className={classes.texts}>
                {Texts}
            </div>
        </div>
            
    )
}

export default Messages;
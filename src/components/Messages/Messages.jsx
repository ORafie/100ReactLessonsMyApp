import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';

const Messages = (props) => {
 
    let Users = props.usersData.map( user => <User name={user.name} id={user.id} />); 
    let Texts = props.textData.map(text => <Text text={text.text} />)
    
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
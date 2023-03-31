import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';
import React from 'react';

const Messages = (props) => {
    
    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }

    let Users = props.usersData.map( user => <User key={user.id} name={user.name} id={user.id} />); 
    
    let Texts = props.textData.map(text => <Text key={text.id} text={text.text} />)
    
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {Users}
            </div>
            <div className={classes.texts}>
                <div><textarea ref={newMessage}></textarea></div>
                <div><button onClick={addMessage}>Add message</button></div>
                {Texts}
            </div>
        </div>
            
    )
}

export default Messages;
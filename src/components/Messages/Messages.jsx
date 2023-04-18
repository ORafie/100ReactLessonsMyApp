import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';
import React from 'react';

const Messages = (props) => {

    let Users = props.usersData.map(user => <User key={user.id} name={user.name} id={user.id} />); 
    let Texts = props.textData.map(text => <Text key={text.id} text={text.text} />);
    let newMessage = React.createRef();
    
    let submitMessage = () => {
        props.addMessage()
        newMessage.current.value = '';
    }

    let onMessageChange = (event) => {
        let newMessageText = event.target.value;
        props.updateTextData(newMessageText)
    }
   
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {Users}
            </div>
            <div className={classes.texts}>
                <div>
                    <textarea onChange={onMessageChange} 
                        ref={newMessage}
                        value={props.newMessageForTextData}
                    />
                </div>
                <div><button onClick={submitMessage}>Send message</button></div>
                {Texts}
            </div>
        </div>
            
    )
}

export default Messages;


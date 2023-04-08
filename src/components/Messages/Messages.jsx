import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';
import React from 'react';
import { addMessageActionCreator } from '../../redux/store';
import { updateTextDataActionCreator } from '../../redux/store';

const Messages = (props) => {
    console.log(('Messages'), props)
    let Texts = props.messagesPage.textData.map(text => <Text key={text.id} text={text.text} />);
    
    let Users = props.messagesPage.usersData.map(user => <User key={user.id} name={user.name} id={user.id} />); 
    
    let newMessage = React.createRef();

    let submitMessage = () => {
        props.dispatch(addMessageActionCreator());
        newMessage.current.value = '';
    }

    let onMessageChange = () => {
        let newTextMessage = newMessage.current.value;
        let action = updateTextDataActionCreator(newTextMessage);
        props.dispatch(action);
    }
   
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {Users}
            </div>
            <div className={classes.texts}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage}
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
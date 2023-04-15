import classes from './Messages.module.css';
import User from './Users/Users';
import Text from './Texts/Texts';
import React from 'react';
import { addMessageActionCreator } from '../../redux/messagesReducer';
import { updateTextDataActionCreator } from '../../redux/messagesReducer';

const Messages = (props) => {
    console.log(('Messages'), props)
    let Users = props.messagesPage.usersData.map(user => <User key={user.id} name={user.name} id={user.id} />); 
    
    let Texts = props.messagesPage.textData.map(text => <Text key={text.id} text={text.text} />);
    
    // let newMessageForTextData = props.messagesPage.newMessageForTextData;
    // let abc = 523;
    // let abcd = {
    //     abc: 523
    // } 
    
    let submitMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let newMessageText = event.target.value;
            // let event = {
            //     target: {
            //        value: ''
            //     } 
            // }
        props.dispatch(updateTextDataActionCreator(newMessageText));
    }
   
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                {Users}
            </div>
            <div className={classes.texts}>
                <div>
                    <textarea onChange={onMessageChange} 
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

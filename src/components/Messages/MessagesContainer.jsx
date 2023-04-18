import Messages from './Messages';
import React from 'react';
import { addMessageActionCreator, updateTextDataActionCreator } from '../../redux/messagesReducer';

const MessagesContainer = (props) => {
   
    let state = props.store.getState();
      
    let submitMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (newMessageText) => {
        let action = updateTextDataActionCreator(newMessageText)
        props.store.dispatch(action);
    }
   
    return (
        <Messages
        addMessage={submitMessage}
        updateTextData={onMessageChange}
        usersData={state.messagesPage.usersData}      
        textData={state.messagesPage.textData}
        newMessageForTextData={state.messagesPage.newMessageForTextData}
         />    
    )
}

export default MessagesContainer;

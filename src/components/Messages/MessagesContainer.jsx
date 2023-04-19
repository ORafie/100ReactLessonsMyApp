import Messages from './Messages';
import React from 'react';
import { addMessageActionCreator, updateTextDataActionCreator } from '../../redux/messagesReducer';
import StoreContext from '../../store-context';

const MessagesContainer = () => {
    
    return <StoreContext.Consumer>
        {store => {
            console.log(store)
                //let state = store.getState().messagesPage;                
                let submitMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (newMessageText) => {
                    //let action = updateTextDataActionCreator(newMessageText)
                    store.dispatch(updateTextDataActionCreator(newMessageText));
                }
                return <Messages
                    addMessage={submitMessage}
                    updateTextData={onMessageChange}
                    usersData={store.getState().messagesPage.usersData}
                    textData={store.getState().messagesPage.textData}
                    newMessageForTextData={store.getState().messagesPage.newMessageForTextData}
                />
        }}          
    </StoreContext.Consumer>
}

export default MessagesContainer;

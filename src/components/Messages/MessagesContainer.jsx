import Messages from './Messages';
import React from 'react';
import { addMessageActionCreator, updateTextDataActionCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
/*
const MessagesContainer = () => {
    
    return <StoreContext.Consumer>
        {store => {               
                let submitMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (newMessageText) => {
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
*/
let mapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        textData: state.messagesPage.textData,
        newMessageForTextData: state.messagesPage.newMessageForTextData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateTextData: (newMessageText) => {
            dispatch(updateTextDataActionCreator(newMessageText));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;

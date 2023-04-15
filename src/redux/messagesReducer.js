const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_DATA = 'UPDATE_TEXT_DATA';

const messagesReducer = (state, action) => {
    if (action === 'ADD_MESSAGE') {
        let newMessage = {
            id: state.textData[state.textData.length - 1].id + 1,
            text: state.newMessageForTextData,
        }
        state.textData.push(newMessage);
        state.newMessageForTextData = '';
    } else if (action === 'UPDATE_TEXT_DATA') {
        state.newMessageForTextData = action.newMessageText;
    }
    return state;
}

export default messagesReducer

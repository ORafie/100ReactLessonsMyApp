const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_DATA = 'UPDATE_TEXT_DATA';

const messagesReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.textData[state.textData.length - 1].id + 1,
                text: state.newMessageForTextData,
            }
            state.textData.push(newMessage);
            state.newMessageForTextData = '';
        case UPDATE_TEXT_DATA:
            state.newMessageForTextData = action.newMessageText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD_MESSAGE'
    }
};

export const updateTextDataActionCreator = (newMessageText) => {
    return {
        type: 'UPDATE_TEXT_DATA', newMessageText: newMessageText
    }
}

export default messagesReducer

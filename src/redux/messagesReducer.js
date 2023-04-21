const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_DATA = 'UPDATE_TEXT_DATA';

let initialState = {
    usersData: [
        { id: 1, name: 'User 1', friend: 'true', fav: 'true' },
        { id: 2, name: 'User 2', friend: 'false', fav: 'false' },
        { id: 3, name: 'User 3', friend: 'false', fav: 'false' },
        { id: 4, name: 'User 4', friend: 'true', fav: 'true' },
        { id: 5, name: 'User 5', friend: 'true', fav: 'false' },
    ],
    textData: [
        { id: 1, text: 'Hello world!' },
        { id: 2, text: 'Where have you been!' },
        { id: 3, text: 'Glad to see you again!' },
    ],
    newMessageForTextData: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.textData[state.textData.length - 1].id + 1,
                text: state.newMessageForTextData,
            };
            return {
                ...state,
                newMessageForTextData: '',
                textData: [...state.textData, newMessage]
            };
        case UPDATE_TEXT_DATA:
            return {
                ...state,
                newMessageForTextData: action.newMessageText
            };
        default:
            return state;
    };
};

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

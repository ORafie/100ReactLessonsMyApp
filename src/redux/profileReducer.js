const ADD_POST = 'ADD_POST';
const UPDATE_POST_DATA = 'UPDATE_POST_DATA';

let initialState = {
    postData: [
        { id: 1, post: 'hi! hi! hi!' },
        { id: 2, post: 'hello world!' },
        { id: 3, post: "how are you? let's walk together" },
        { id: 4, post: 'have a nice day' },
        { id: 5, post: 'finally spring! everything is blossoming!' },
        { id: 6, post: 'where are you?' },
        { id: 7, post: 'changes! welcome!' },
    ],
    newTextForPostData: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData[state.postData.length - 1].id + 1,
                post: state.newTextForPostData,
            };
            return {
                ...state,
                newTextForPostData: '',
                postData: [...state.postData, newPost],
            };
        case UPDATE_POST_DATA:
            return {
                ...state,
                newTextForPostData: action.newText,
            };
        default:
            return state;
    };
};

export const addPospActionCreator = () => {
    return {
        type: 'ADD_POST'
    };
};

export const updatePostDataActionCreator = (newText) => {
    return {
        type: 'UPDATE_POST_DATA', newText: newText
    };
};

export default profileReducer;

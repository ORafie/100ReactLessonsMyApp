const ADD_POST = 'ADD_POST';
const UPDATE_POST_DATA = 'UPDATE_POST_DATA';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData[state.postData.length - 1].id + 1,
                post: state.newTextForPostData,
            }
            state.postData.push(newPost);
            state.newTextForPostData = '';
            return state;
        case UPDATE_POST_DATA:
            state.newTextForPostData = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPospActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
};

export const updatePostDataActionCreator = (newText) => {
    return {
        type: 'UPDATE_POST_DATA', newText: newText
    }
};


export default profileReducer;

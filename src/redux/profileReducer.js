const ADD_POST = 'ADD_POST';
const UPDATE_POST_DATA = 'UPDATE_POST_DATA';

const profileReducer = (state, action) => {

    if (action.type === 'ADD_POST') {
        let newPost = {
            id: state.postData[state.postData.length - 1].id + 1,
            post: state.newTextForPostData,
        }
        state.postData.push(newPost);
        state.newTextForPostData = '';
    } else if (action.type === 'UPDATE_POST_DATA') {
        state.newTextForPostData = action.newText;
    }

    return state;
}

export default profileReducer;

import MyFriends from './MyFriends';
import React from 'react';
import { connect } from 'react-redux';
/*
const MyFriendsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            return <MyFriends
                usersData={store.getState().messagesPage.usersData}
            />    
        }}
    </StoreContext.Consumer>
}
*/
let mapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
    }
} 
/*
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPospActionCreator());
         },
        updatePostData: (newText) => {
            let action = updatePostDataActionCreator(newText);
            dispatch(action);
        }
    }
}*/

const MyFriendsContainer = connect(mapStateToProps)(MyFriends);
export default MyFriendsContainer;


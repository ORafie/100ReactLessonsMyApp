import MyFriends from './MyFriends';
import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';
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
        usersData: state.usersPage.usersData,
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
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyFriends);

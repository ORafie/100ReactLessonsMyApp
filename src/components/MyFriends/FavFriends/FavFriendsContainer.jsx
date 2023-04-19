import React from 'react';
import FavFriends from './FavFriends';
import { connect } from 'react-redux';
/*
const FavFriendsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            return <FavFriends
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

const FavFriendsContainer = connect(mapStateToProps)(FavFriends);

export default FavFriendsContainer;


//.filter(user => user.fav === 'true')
//friend={user.friend}

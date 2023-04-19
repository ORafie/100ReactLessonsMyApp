import MyFriends from './MyFriends';
import StoreContext from '../../store-context';
import React from 'react';

const MyFriendsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            return <MyFriends
                usersData={store.getState().messagesPage.usersData}
            />    
        }}
    </StoreContext.Consumer>
}

export default MyFriendsContainer;


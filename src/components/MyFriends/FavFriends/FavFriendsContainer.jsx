import React from 'react';
import FavFriends from './FavFriends';
import StoreContext from '../../../store-context';

const FavFriendsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            return <FavFriends
                    usersData={store.getState().messagesPage.usersData}
                />      
        }}
    </StoreContext.Consumer>
}

export default FavFriendsContainer;


//.filter(user => user.fav === 'true')
//friend={user.friend}

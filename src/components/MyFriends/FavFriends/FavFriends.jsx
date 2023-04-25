import classes from './FavFriends.module.css';
import FavUser from '../User/FavUsers';
import React from 'react';

const FavFriends = (props) => {
    
    console.log(props);

    let favFriend = props.usersData.filter(user => user.followed === 'true')
        .map(user =>
            <FavUser
                key={user.id}
                name={user.name}
                id={user.id}
                friend={user.friend}
                avatarUrl={user.avatarUrl} />); 

    return (
        <div>
            {favFriend}
        </div>
            
    )
}

export default FavFriends;


//.filter(user => user.fav === 'true')
//friend={user.friend}

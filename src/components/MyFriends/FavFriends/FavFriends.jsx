import classes from './FavFriends.module.css';
import User from '../../Messages/Users/Users';
import React from 'react';

const FavFriends = (props) => {
  
    console.log(props);

    let favFriend = props.usersData.filter(user => user.fav === 'true')
        .map(user => <User key={user.id} name={user.name} id={user.id} friend={user.friend } />); 

    return (
        <div>
            {favFriend}
        </div>
            
    )
}

export default FavFriends;


//.filter(user => user.fav === 'true')
//friend={user.friend}

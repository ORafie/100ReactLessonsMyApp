import classes from './FavFriends.module.css';
import User from '../../Messages/Users/Users';

const FavFriends = (props) => {
    let FavFriend = props.usersData
        .filter(user => user.fav === 'true')
        .map(user => <User key={user.id} name={user.name} id={user.id} friend={user.friend} />); 

    return (
        <div>
            {FavFriend}
        </div>
            
    )
}

export default FavFriends;

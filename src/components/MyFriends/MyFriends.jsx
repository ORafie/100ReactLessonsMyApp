import classes from './MyFriends.module.css';
import User from '../Messages/Users/Users';

const MyFriends = (props) => {
    let MyFriend = props.usersData
        .filter(user => user.friend === 'true')
        .map(user => <User name={user.name} id={user.id} />); 
    return (
        <div className={classes.friend}>
            {MyFriend}
        </div>
            
    )
}

export default MyFriends;

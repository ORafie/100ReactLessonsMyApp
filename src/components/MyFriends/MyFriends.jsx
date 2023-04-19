import classes from './MyFriends.module.css';
import User from '../Messages/Users/Users';

const MyFriends = (props) => {
    console.log(props)
    //let state = props.store.getState()
    let MyFriend = props.usersData
        .filter(user => user.friend === 'true')
        .map(user => <User key={user.id}  name={user.name} id={user.id} />); 
    return (
        <div className={classes.friend}>
            {MyFriend}
        </div>
            
    )
}

export default MyFriends;

import classes from './MyFriends.module.css';
import Account from './User/User';
import { followAC } from '../../redux/usersReducer';
import { unfollowAC } from '../../redux/usersReducer';

const MyFriends = (props) => {
    //debugger;
    
    //let state = props.store.getState()
    let MyFriend = props.usersData
        .filter(user => user.friend === 'true')
        .map(user => {
            console.log(user)
            return <Account
                key={user.id}
                name={user.name}
                avatarUrl={user.avatarUrl}
                id={user.id}
                status={user.status}
                city={user.location.city}
                country={user.location.country}
                followed={user.followed}
                followAC
                unfollowAC />;
        }); 
   
    return (
        <div className={classes.friend}>
           <span>
                {MyFriend}
            </span>
        </div>            
    )
}

export default MyFriends;

//city={user.location.city} country={user.location.country}
         

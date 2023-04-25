import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    console.log(props);
    let path = '/myfriends/' + props.id;
    
    return <div className={classes.user}> 
            <span>
                <div>
                <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined} >{props.name}</NavLink>
                <div>{props.status}</div>
                    <img src={props.avatarUrl} />
                </div>
                <div>
                {
                    props.followed == true
                        ? (<button onClick={() => {props.unfollowAC(props.id) }} >Unfollow</button>)
                        : (<button onClick={() => {props.followAC(props.id) }}>Follow</button>)
                }  
                </div>
            </span>
            <span>
                <div>{props.country}</div>
                <div>{props.city}</div>
            </span> 
    </div>
};

export default User; 



// props.usersData.map(user => <div key={user.id}></div>

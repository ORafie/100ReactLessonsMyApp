import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const FavUser = (props) => {
    let path = '/myfriends/' + props.id;
    
    return <div className={classes.user}>
        <span>
            <div>
                <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined} >{props.name}</NavLink>
                <div>{props.status}</div>
                <img src={props.avatarUrl} />
            </div>
        </span>
    </div>
};

export default FavUser;




// props.usersData.map(user => <div key={user.id}></div>

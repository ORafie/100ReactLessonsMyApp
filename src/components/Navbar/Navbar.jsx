import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import FavFriends from '../MyFriends/FavFriends/FavFriends';


const Navbar = (props) => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to='/profile' className={({ isActive }) => isActive ? classes.active : undefined} >Profile</NavLink>
    </div>
      <div className={classes.item}>
      <NavLink to='/messages' className={({ isActive }) => isActive ? classes.active : undefined} >Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' className={({ isActive }) => isActive ? classes.active : undefined} >News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/music' className={({ isActive }) => isActive ? classes.active : undefined} >Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/settings' className={({ isActive }) => isActive ? classes.active : undefined} >Settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/myfriends' className={({ isActive }) => isActive ? classes.active : undefined} >My Friends</NavLink>
    </div>
    <div className={classes.detail}>
      <FavFriends usersData={props.usersData} />
    </div>
  </nav>
}
export default Navbar;
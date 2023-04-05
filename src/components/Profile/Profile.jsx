import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts
            profilePage={props.profilePage}
            postData={props.profilePage.postData}
            dispatch={props.dispatch}
            newTextForPostData={props.profilePage.newTextForPostData}
        />
    </div>
}

export default Profile;

// properties=props
// property with name abc and value 123
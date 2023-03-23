import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {
    // let postData = [
    //     { id: 1, post: 'hi! hi! hi!' },
    //     { id: 2, post: 'hello world!' },
    //     { id: 3, post: "how are you? let's walk together" },
    //     { id: 4, post: 'have a nice day' },
    //     { id: 5, post: 'finally spring! everything is blossoming!' },
    //     { id: 6, post: 'where are you?' },
    //     { id: 7, post: 'changes! welcome!' },
    // ]

    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts postData={ props.postData} />
    </div>
}

export default Profile;
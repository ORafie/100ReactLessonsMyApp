import classes from './Messages.module.css';

const users = () => {
    return (
        <div className={classes.messages}>
            <div className={classes.users}> 
                <div className={classes.user + " " + classes.active}>
                    User1
                    <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
                <div className={classes.user}>
                    User2
                    <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
                <div className={classes.user}>
                    User3
                 <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
                <div className={classes.user}>
                    User4
                 <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
                <div className={classes.user}>
                    User5
                 <img src='https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569__340.jpg' />
                </div>
            </div>
            <div className={classes.texts} >
                <div className={classes.text}>Hello!</div>
                <div className={classes.text}>Where have you been!</div>
                <div className={classes.text}>Glad to see you again!</div>
            </div>
        </div>
            
    )
}

export default users;
import React, { useState } from 'react';
import classes from './LikeCounter.module.css'

const LikeCounter = () => {
    const [likes, setLikes] = useState(0);
     
    const handleLike = () => {
        setLikes(likes + 1);
    }
    return (
        <div>
            <button className={classes.likes_btn} onClick={handleLike}>Like! {likes}</button>
        </div>
    );
}
  
export default LikeCounter;



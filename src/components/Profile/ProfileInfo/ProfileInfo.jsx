import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.wallpaper}></div>
            <div className={classes.info}>
                <div className={classes.info__avatar}></div>
                <div className={classes.info__about}>About</div>
            </div>
        </div>
        
    )
}


export default ProfileInfo;
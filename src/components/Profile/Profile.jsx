import React from 'react';
import classes from './Profile.module.css';

import Wall from './Wall/Wall'

const Profile = () => {
    return (
        <div>
            <div className={classes.wallpaper}>
                <img src="https://englishlib.org/dictionary/img/wlibrary/b/5ff5b7535a3286.34388783.jpg" />
            </div>
            
            <div>
                Ava + Desc
            </div>
            
            <Wall />
        </div>
    )
};

export default Profile;

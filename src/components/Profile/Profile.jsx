import React from 'react';
import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import WallContainer from './Wall/WallContainer';

const Profile = (props) => {
    // console.log('Profile', props);
    // debugger;
    return (
        <div className={classes.profileContainer}>
           <ProfileInfo />
            
            <WallContainer />
        </div>
    )
};

export default Profile;

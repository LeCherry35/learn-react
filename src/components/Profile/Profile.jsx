import React from 'react';
// import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wall from './Wall/Wall';
import WallContainer from './Wall/WallContainer';

const Profile = (props) => {
    // console.log('Profile', props);
    // debugger;
    return (
        <div>
           <ProfileInfo />
            
            <WallContainer />
        </div>
    )
};

export default Profile;

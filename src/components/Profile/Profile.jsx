import React from 'react';
// import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wall from './Wall/Wall';

const Profile = (props) => {
    // console.log(props);
    // debugger;
    return (
        <div>
           <ProfileInfo />
            
            <Wall postsData={props.profileData.postsData} 
                newPostText={props.profileData.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;

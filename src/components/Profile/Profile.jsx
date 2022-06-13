import React from 'react';
// import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Wall from './Wall/Wall';

const Profile = (props) => {
   debugger;

    return (
        <div>
           <ProfileInfo />
            
            <Wall postsData={props.profileData.postsData} 
                addPost={props.addPost}
                newPostText={props.profileData.newPostText}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};

export default Profile;

import React from 'react';
import classes from './FriendsBar.module.css';



function FriendsBar(props){
    
    let friends = props.friends.map((friend,id) => {
        let bg = "url('" + friend.ava + "')"
        let style = {
            backgroundImage: bg,
            backgroundSize: '100% 100%'
        }
        return  (
            <div className={classes.friend} key={id}>
                <div className={classes.avatar} style={style}></div>
                <div>{friend.name}</div>
            </div>
            
        )
    });
    return (
        friends
    )
}
export default FriendsBar;
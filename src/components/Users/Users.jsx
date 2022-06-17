import axios from "axios";
import React from "react";
import classes from './Users.module.css'
let Users = (props) => {
    // debugger;
    // console.log('Us', props.users)

    const getUsers = () => {
        if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            
            response => {
                console.log(response.data.items)
                props.setUsers(response.data.items)
            }
        )
    }
        
        
    
        // props.setUsers([
        //     {id: 1, friend: true, name: 'Nom', status: 'BooYaa', location: {city: 'Kiev', country: 'Ukraine'}, ava: './img/photo_2022-02-19_20-13-34.jpg'},
        //     {id: 2, friend: true, name: 'Alisa', status: 'Kisses', location: {city: 'Kiev', country: 'Ukraine'}, ava: './img/IMG_3522.PNG'},
        //     {id: 3, friend: false, name: 'Loh', status: 'OOps', location: {city: 'Kramatorsk', country: 'Ukraine'}, ava: './img/IMG_3522.PNG'}
        // ]);
    }
    
    // console.log('u', props)
    return (
        <div className={classes.usersContainer}>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map( (u,id) => {
                
                    let bg = "url('" + u.ava + "')"
                    let style = {
                    backgroundImage: bg,
                    backgroundSize: '100% 100%'
                    }
                
                return (
                    <div key ={id} className={classes.user}>
                        <div className={classes.avaContainer}>
                            <div className={classes.ava} style={style}>
                            </div>
                            <div>
                                <button onClick={() => {props.toggleFollow(u.id)}}>{u.followed ? "Unfollow" : "Follow"}</button>
                            </div>
                        </div>
                        <div className={classes.infoContainer}>
                            <span className={classes.name}>{u.name}</span>
                            <p className={classes.status}>{u.status}</p>
                            {/* <span>{u.location.city},</span>
                            <span> {u.location.country}</span> */}
                        </div>                        
                        

                    </div>
                )
            })}
        </div>
    )
}
export default Users;
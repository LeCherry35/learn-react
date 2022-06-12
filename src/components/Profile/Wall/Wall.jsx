import React from 'react';
import classes from './Wall.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Wall = (props) => {

    

    let postsElements = props.postsData.map((post,id) => {
        return (
            <Post key={id} text={post.text} likes={post.likesCount}/>
        )
    })


    return (
        <div className={classes.wall}>
            <NewPost addPost={props.addPost} 
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}/>
            {postsElements}
        </div>
    )
}

export default Wall;
import React from 'react';
import classes from './Wall.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Wall = (props) => {

    // console.log(props);
    // debugger;

    let postsElements = props.postsData.map((post,id) => {
        return (
            <Post key={id} text={post.text} likes={post.likesCount}/>
        )
    })


    return (
        <div className={classes.wall}>
            <NewPost dispatch={props.dispatch}
                newPostText={props.newPostText}/>
            {postsElements}
        </div>
    )
}

export default Wall;
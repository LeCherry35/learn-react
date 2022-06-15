import React from 'react';
import classes from './Wall.module.css';
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';

const Wall = (props) => {

    // console.log('Wall', props);
    // debugger;
    

    let postsElements = props.postsData.map((post,id) => {
        return (
            <Post key={id} text={post.text} likes={post.likesCount}/>
        )
    })


    return (
        <div className={classes.wall}>
            <NewPostContainer />
            {postsElements}
        </div>
    )
}

export default Wall;
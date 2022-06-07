import React from 'react';
import classes from './NewPost.module.css';

const NewPost = () => {
    return (
    <div>
        <div className={classes.title}>
            Add post
        </div>
        
        <div className={classes.addPost}>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        
    </div>)
}

export default NewPost;
import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    console.log(props);
    return (
    <div className={classes.odd}>
        <div className={classes.avatar}>
            <img src='data:image/jpeg;base64,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'></img>
        </div>
        <div className={classes.content}>
            {props.text}
        </div>
        <div>
            likes : {props.likes}
        </div>
        
        
    </div>
    )
}

export default Post;
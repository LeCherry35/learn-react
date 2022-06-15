import React from 'react';
import classes from './NewPost.module.css';
import { addPostActionCreator,updateNewPostActionCreator } from '../../../../redux/profile-reducer';

const NewPost = (props) => {
    
    // console.log('NewPost', props);
  

    let NewPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostTextChange = () => {
        let text = NewPostElement.current.value;
        props.onPostTextChange(text);
    }
   
    return (
    <div>
        <div className={classes.title}>
            
        </div>
        
        <div className={classes.addPost}>
            <textarea ref={NewPostElement} onChange={onPostTextChange} value={props.newPostText}/>
            <div className="addPost__button">
                <button onClick={ onAddPost }>Add Post</button>
            </div>
            
        </div>
        
    </div>)
}

export default NewPost;
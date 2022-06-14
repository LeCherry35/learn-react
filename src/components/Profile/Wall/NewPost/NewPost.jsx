import React from 'react';
import classes from './NewPost.module.css';
import { addPostActionCreator,updateNewPostActionCreator } from '../../../../redux/state';

const NewPost = (props) => {
    
    // console.log(props);
    // debugger;

    let NewPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostTextChange = () => {
        let text = NewPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
   
    return (
    <div>
        <div className={classes.title}>
            
        </div>
        
        <div className={classes.addPost}>
            <textarea ref={NewPostElement} onChange={onPostTextChange} value={props.newPostText}/>
            <div className="addPost__button">
                <button onClick={ addPost }>Add Post</button>
            </div>
            
        </div>
        
    </div>)
}

export default NewPost;
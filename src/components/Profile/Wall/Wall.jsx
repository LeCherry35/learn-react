import React from 'react';
import classes from './Wall.module.css';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Wall = () => {
    return (
        <div>
            <NewPost />
            <Post text="Booyaaa" likes="5"/>
            <Post text="Caravaggio was a good guy"  likes="6"/>
            <Post text="lol offtop" likes="3"/>
        </div>
    )
}

export default Wall;

import './index.css';

import reportWebVitals from './reportWebVitals';

import state from './redux/state'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { sendMessage } from './redux/state';
import { updateNewMessage } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderEntireTree = (state) => {
    root.render(
    <React.StrictMode>
      <App state={ state } 
        addPost={ addPost } 
        updateNewPostText={ updateNewPostText }
        sendMessage ={ sendMessage }
        updateNewMessage={ updateNewMessage }/>
    </React.StrictMode>
    );
  }

renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

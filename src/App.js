import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = (props) => {
  // debugger;
  // console.log('App', props);

  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Nav />
        
        
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/" 
              element={<Profile /> */}
            <Route path="/profile" 
              element={<Profile />}/>
            <Route path="/dialogs/*" 
              element={<DialogsContainer />}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/users" element={<UsersContainer/>}/>
          </Routes>              
        </div> 


        
        
      </div>
      
    </BrowserRouter>
  
  );
}

export default App;

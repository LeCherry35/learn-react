import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  // debugger;
  // console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Nav navData={props.state.navData}/>
        
        
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/" 
              element={<Profile /> */}
            <Route path="/profile" 
              element={<Profile 
              profileData={props.state.profilePage} 
              dispatch={props.dispatch}/>}/>
            <Route path="/dialogs/*" 
              element={<Dialogs 
              dialogsData={props.state.dialogsPage}
              dispatch={props.dispatch}/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>              
        </div> 


        
        
      </div>
      
    </BrowserRouter>
  
  );
}

export default App;

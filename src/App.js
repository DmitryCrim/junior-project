import React from 'react'
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from  './components/Dialogs/Dialogs'
import Profile from "./components/Profile/Profile";
import './App.css';
import {Routes, Route, Link} from "react-router-dom";


function App(props) {
  return (
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div  className="app-wrapper-content">
                  <Routes>
                      {/*<Route path="/dialogs" element = {<Dialogs />} />*/}
                      {/*<Route path="/" element={<Profile posts={props.posts} />} />*/}
                      <Route path="/dialogs/" element={<Dialogs state={props.state.dialogsPage}  />} />
                      {/*<Route path='/dialogs' element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}/>*/}
                      <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>

                  </Routes>
              </div>
          </div>
       )
}
export default App;

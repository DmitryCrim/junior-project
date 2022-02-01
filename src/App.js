import React from 'react'
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from  './components/Dialogs/Dialogs'
import Profile from "./components/Profile/Profile";
import './App.css';
import {Routes, Route, Link} from "react-router-dom";


function App(props) {
    // let posts = [
    //     {id: 1, message: "Hello, glad to see you", likesCount: 12},
    //     {id: 2, message: "Best props", likesCount: 15},
    // ]
  return (

          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div  className="app-wrapper-content">
                  <Routes>
                      {/*<Route path="/dialogs" element = {<Dialogs />} />*/}
                      {/*<Route path="/" element={<Profile posts={props.posts} />} />*/}
                      <Route path="/dialogs/" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />

                      {/*<Route path='/dialogs' element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}/>*/}
                      <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                      {/*<Route path="/news" element = {<News />} />*/}
                      {/*<Route path="/music" element = {<Music />} />*/}
                      {/*<Route path="/settings" element = {<Settings />} />*/}

                  </Routes>


                  {/*<Route path="/dialogs" component ={Dialogs} />*/}
                  {/*<Route path="/profile" component = {Profile} />*/}

              </div>
          </div>
       )
}
export default App;

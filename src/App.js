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
                      <Route path="/dialogs" element = {<Dialogs />} />
                      <Route path="/profile" element = {<Profile />} />
                      {/*<Route path="/news" element = {<News />} />*/}
                      {/*<Route path="/music" element = {<Music />} />*/}
                      {/*<Route path="/settings" element = {<Settings />} />*/}

                  </Routes>


                  {/*<Route path="/dialogs" component ={Dialogs} />*/}
                  {/*<Route path="/profile" component = {Profile} />*/}
                  {/*<Dialogs/>*/}
                  {/*<Profile/>*/}
              </div>
          </div>
       )
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

let posts = [
    {id: 1, message: "Hello, glad to see you", likesCount: 12},
    {id: 2, message: "Best props", likesCount: 15},
]

let dialogs = [
    {id: 1, name: "Evgen"},
    {id: 2, name: "Dmitry"},
    {id: 3, name: "Sophia"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Sergo"},
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "What is your name?"},
    {id: 3, message: "How old are you"},
    {id: 4, message: "Learn JavaScript"},
    {id: 5, message: "Learn React"},
    {id: 6, message: "Learn HTML and CSS"},
]

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App posts = {posts} dialogs = {dialogs} messages = {messages} />
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

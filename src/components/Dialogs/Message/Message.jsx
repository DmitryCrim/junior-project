import React from 'react'
import s from './../Dialogs.module.css'
// import {Link} from "react-router-dom";
// import {Router, Route, NavLink} from "react-router-dom"



const Message = (props) => {
    return (
        <div className={s.messege}>{props.message}</div>
    )
}



export default Message;
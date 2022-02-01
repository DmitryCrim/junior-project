import React from 'react'
import s from './../Dialogs.module.css'
// import {Link} from "react-router-dom";
// import {Router, Route, NavLink} from "react-router-dom"


const Message = (props) => {
    return (
        <div>
            <div className={s.messege}>
                <li>{props.message}</li>
            </div>


        </div>

    )
}


export default Message;
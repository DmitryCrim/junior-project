import React from 'react'
import s from './../Dialogs.module.css'
// import {Link} from "react-router-dom";
import {Router, Route, NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <img  className= {s.ava_person} src={require ( "./../../img/ava_post.jpg")} alt="ava_post"/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
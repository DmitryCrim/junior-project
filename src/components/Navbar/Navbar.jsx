import React from 'react'
import Background from '../img/sidebar.jpg'
import b from './Navbar.module.css'
import {Link} from "react-router-dom";

console.log (b)
const Navbar = () => {
    return (
        <nav className={b.nav}
             style={{
                 background: `url(${Background})`,
             }}>

            <div className={b.item}><Link  to="/profile">Profile</Link></div>
            <div className = {`${b.item} ${b.active}`}><Link  to="/dialogs">Messages</Link></div>
            <div className={b.item}><Link  to="/news">News</Link></div>
            <div className={b.item}><Link to="/music">Music</Link></div>
            <div className={b.item}><Link to="/settings">Settings</Link></div>

            <div className={b.item}><Link to="/friends"> Friends </Link></div>
        </nav>
    )
}

export default Navbar
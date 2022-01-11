import React from 'react'
import Background from '../img/sidebar.jpg'
import b from './Navbar.module.css'
console.log (b)
const Navbar = () => {
    return (
        <nav className={b.nav}
             style={{
                 background: `url(${Background})`,
             }}>

            <div ><a className={b.item} href="#">Profile</a></div>
            <div><a className = {`${b.item} ${b.active}`} href="#">Messages</a></div>
            <div ><a  className={b.item}href="#">News</a></div>
            <div><a  className={b.item} href="#">Music</a></div>
            <div><a className={b.item} href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar
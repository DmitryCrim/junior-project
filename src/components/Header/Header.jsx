import React from 'react'
import logo from "../img/logo.jpg";
import a from './Header.module.css'

const Header = () => {
    return (
        <header className={a.header}>
            <img className={a.header__img} src={logo} alt="logo"/>
        </header>
    )
}
export default Header
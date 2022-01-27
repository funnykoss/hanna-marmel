import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'



const NavBar = () => {
    return (
        <>
        <ul className={s.navList}>
            <li className={s.navItem}>
                <NavLink to="/about" className={({isActive})=>isActive?s.active:s.navLink}>
About
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/portfolio" className={({isActive})=>isActive?s.active:s.navLink}>
Portfolio
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/blog" className={({isActive})=>isActive?s.active:s.navLink}>
Blog
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/contacts" className={({isActive})=>isActive?s.active:s.navLink}>
Contacts
                </NavLink>
            </li>
        </ul>
        </>

    )
}

export default NavBar
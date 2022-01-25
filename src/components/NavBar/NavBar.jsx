import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <>
        <ul className={s.navList}>
            <li className={s.navItem}>
                <NavLink to="/about" className={s.navLink}>
About
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/portfolio" className={s.navLink}>
Portfolio
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/blog" className={s.navLink}>
Blog
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/contacts" className={s.navLink}>
Contacts
                </NavLink>
            </li>
        </ul>
        </>

    )
}

export default NavBar
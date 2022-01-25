import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <>
        <ul>
            <li>
                <NavLink to="/about" className={s.navItem}>

                </NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={s.navItem}>

                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={s.navItem}>

                </NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={s.navItem}>

                </NavLink>
            </li>
        </ul>
        </>

    )
}

export default NavBar
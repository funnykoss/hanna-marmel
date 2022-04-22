import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'
import { useEffect } from 'react';

const NavBar = (props) => {
     
     useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener('click', handleOutModalClick);
    return () => {
      window.removeEventListener('click', handleOutModalClick);
    };
  }, [handleOutModalClick]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleOutModalClick(event) {
    if (event.currentTarget !== event.target) {
      props.onClose();
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      props.onClose();
    }
  }
    return (
        <>
           
        <ul className={s.navList} onClick={handleOutModalClick}>
            <li className={s.navItem}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? s.active : s.navLink }>
About
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? s.active : s.navLink}>
Portfolio
                </NavLink>
            </li>
            <li className={s.navItem}>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? s.active : s.navLink}>
Blog
                </NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? s.active : s.navLink}>
Contacts
                </NavLink>
            </li>
                </ul>
         
        </>

    )
}

export default NavBar
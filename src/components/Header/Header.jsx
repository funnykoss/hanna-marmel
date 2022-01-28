import React from "react";
import s from './Header.module.css'
import HeaderLogo from "../HeaderLogo";
import NavBar from '../NavBar'
import Container from "../Container";
import { BiMenuAltRight } from 'react-icons/bi';
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <HeaderLogo />
                    <NavBar /> 
                    <BiMenuAltRight className={s.icon}/>
                </div>
            </Container>
            </header>
            <Outlet/>
           
    </>
    )
}
export default Header
import React from "react";
import s from './Header.module.css'
import HeaderLogo from "../HeaderLogo";
import NavBar from '../NavBar'
import Container from "../Container";
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
    return (
        <>
        <section className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <HeaderLogo />
                    <NavBar /> 
                    <BiMenuAltRight className={s.icon}/>
                </div>
            </Container>
        </section>
           
    </>
    )
}
export default Header
import React, { useState } from "react";
import s from './Header.module.css'
import HeaderLogo from "../HeaderLogo";
import NavBar from '../NavBar'
import Container from "../Container";
import { BiMenuAltRight } from 'react-icons/bi';
import { Outlet } from "react-router-dom";
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header = () => {
    const[isBurgerOpen,setIsBurgerOpen] = useState(false)
        const viewPort = useWindowDimensions();
    const toggleClick = (event) => {
       event.preventDefault()
    setIsBurgerOpen(isBurgerOpen=>!isBurgerOpen)
}
    return (
        <>
        <header className={s.header}>
            <Container>
                    <div className={s.wrapper}>
                        {viewPort.width < 768 && (
                                    <>
                                <HeaderLogo />
                                <button type="button" onClick={toggleClick} className={s.headerBtn}>
                                    <BiMenuAltRight className={s.icon} />
                                </button>
                                
                                {isBurgerOpen &&
                                    <>
                                    <button type="button" onClick={toggleClick} className={s.headerBtnOpen}>
                                    <BiMenuAltRight className={s.iconOpen} />
                                    </button>
                                    
                                    <NavBar />
                                    </>
                                   }
                            </>
                        )}
                        {viewPort.width >= 768 &&(    <>
                            <HeaderLogo />
                             <NavBar />
                             <BiMenuAltRight className={s.icon} />
                                
                            </>)}
                    </div>
            </Container>
            </header>
            <Outlet/>
           
    </>
    )
}
export default Header
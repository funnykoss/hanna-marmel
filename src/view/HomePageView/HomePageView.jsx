import React from "react";
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery'
import Container from "../../components/Container";
import list from '../../JSON/start.json'
// import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import s from './HomePageView.module.css'



const HomePageView = () => {
    return (
        <Container>
            <div className={s.sectionInfo}>
                    <div className={s.photograferName}>
                        <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
                        <h2 className={s.description}>photographer</h2>
                    </div>
                    <ul className={s.socialLinks}>
                        <li className={s.socialItem}> 
                            <a href="https://www.instagram.com/hannamarmel/" target="_blank" rel="noreferrer"> 
                             <AiFillInstagram className={s.socialIcon}/> 
                            </a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.facebook.com/MAnyapeace" target="_blank" rel="noreferrer">
                            <RiFacebookCircleFill className={s.socialIcon}/>     
                            </a> 
                        </li>
                    </ul>
            </div> 
            <PortfolioGallery list={list}/>
        </Container>
    )
}

export default HomePageView
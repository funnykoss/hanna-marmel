import React from "react";
import { Link } from "react-router-dom";
import s from '../PortfolioPageView/PortfolioPageView.module.css'
import PortfolioGallery  from '../../components/PortfolioGallery'
import portrets from '../../JSON/portrets.json'
import Container from "../../components/Container/Container";
import { MdOutlineDoubleArrow } from 'react-icons/md';


const PortretsPageView = () => {
    return (
        
        <section className={s.portfolioSection}>
            <Container>
                <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
                <PortfolioGallery list={portrets} />
                <Link to="/food" className={s.link}>
                    <MdOutlineDoubleArrow className={ s.icon}/>
                </Link>
             </Container>
            </section>
       
    )
}

export default PortretsPageView
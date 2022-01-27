import React from "react";
import { Link } from "react-router-dom";
import s from './PortfolioPageView.module.css'
import PortfolioGallery from '../../components/PortfolioGallery/'
import list from '../../JSON/portfolio.json'
import Container from "../../components/Container/Container";
import { MdOutlineDoubleArrow } from 'react-icons/md';



const PortfolioPageView = () => {
    return (
        
        <section className={s.portfolioSection}>
            <Container>
                <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
                <PortfolioGallery list={list} />
                <Link to="portrets" className={s.link}>
                    <MdOutlineDoubleArrow className={ s.icon}/>
                </Link>
             </Container>
            </section>
       
    )
}

export default PortfolioPageView
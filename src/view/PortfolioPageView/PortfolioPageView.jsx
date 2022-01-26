import React from "react";
import s from './PortfolioPageView.module.css'
import PortfolioGallery from '../../components/PortfolioGallery/'
import list from '../../JSON/portfolio.json'
import Container from "../../components/Container/Container";


const PortfolioPageView = () => {
    return (
        
        <section className={s.portfolioSection}>
            <Container>
                <PortfolioGallery list={list} />
                </Container>
            </section>
       
    )
}

export default PortfolioPageView
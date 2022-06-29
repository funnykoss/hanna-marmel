import React from "react";
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery'
import Container from "../../components/Container";
import list from '../../JSON/portrets.json'


const HomePageView = () => {
    return (
        <Container>
            <PortfolioGallery list={list}/>
        </Container>
    )
}

export default HomePageView
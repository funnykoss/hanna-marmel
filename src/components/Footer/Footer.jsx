import React from "react";

import s from './Footer.module.css'
import Reviews from '../Reviews/Reviews'
import Container from "../Container";
import Contacts from "./Contacts";

const Footer = () => {
    return (
        <Container>
            <div className={s.footer}>
                <Contacts/>
                <Reviews />
            </div>
                
        
        </Container>
       
    )
}

export default Footer
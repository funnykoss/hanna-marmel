import React from "react";

import s from './Footer.module.css'
import SendMail from '../SendMail/SendMail'
import Container from "../Container";
import Contacts from "./Contacts";

const Footer = () => {
    return (
        <Container>
                <Contacts/>
            {/* <SendMail /> */}
        
        </Container>
       
    )
}

export default Footer
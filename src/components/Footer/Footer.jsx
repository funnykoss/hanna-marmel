import React from "react";

import s from './Footer.module.css'
import SendMail from '../SendMail/SendMail'
import Container from "../Container";
import Contacts from "./Contacts";

const Footer = () => {
    return (
        <Container>
            <SendMail />
            <Contacts/>
        </Container>
       
    )
}

export default Footer
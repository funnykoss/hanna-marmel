import React from "react";

import s from "./Footer.module.css";
import SendReviews from "../SendReviews/SendReviews";
import Container from "../Container";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Container>
      <div className={s.footer}>
        <SocialLinks />
        <SendReviews />
      </div>
    </Container>
  );
};

export default Footer;

import React from "react";

import s from "./Footer.module.css";
import Reviews from "../Reviews/Reviews";
import Container from "../Container";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Container>
      <div className={s.footer}>
        <SocialLinks />
        <Reviews />
      </div>
    </Container>
  );
};

export default Footer;

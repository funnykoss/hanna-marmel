import React from "react";
import Logo from '../../images/header/logo-PEACE.jpeg'
import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <>
            <Link to="/">
            <img src={Logo} alt="логотип" />
            </Link>
        </>
    )
}

export default HeaderLogo
import React from "react";
import "./Footer.css"
import Logo from '../../assets/LOGOblack.svg'


const Footer = () => {
    return (
        <div className="DivFooter" >
            <img className="LogoFooter"
                src={Logo}
                alt=" Logo Kasa monochrome noir"
            />
            <p className="TextFooter" > © 2020 Kasa. All rights reserved </p>

        </div>
    )
}


export default Footer;

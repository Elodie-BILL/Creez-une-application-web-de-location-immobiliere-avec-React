import React from "react";
import styled from 'styled-components'
import Logo from '../../assets/LOGOblack.png'

const DivFooter = styled.div`
    background-color:#000 ;
    height: 200px;
    padding-top: 20px;
`
const LogoFooter = styled.img`
    padding: 3% 45%;
`

const TextFooter = styled.p`
    text-align : center;
    color: #fff ;
    

`

const Footer = () => {
    return (
        <DivFooter>
            <LogoFooter
                src={Logo}
                alt=" Logo Kasa monochrome noir"
            />
            <TextFooter> © 2020 Kasa. All rights reserved </TextFooter>

        </DivFooter>
    )
}


export default Footer;

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const DivFooter = styled.div`
background-color:#000 ;
`
const LogoFooter = styled.img`
padding-inline: 45%;
`

const TextFooter = styled.p`
    text-align : center;
    color: #fff ;
`

const Footer = ({ srcfootImg, altFootImg, textFooter }) => {
    return (
        <DivFooter>
            <LogoFooter
                src={srcfootImg}
                alt={altFootImg}
            />
            <TextFooter>{textFooter}</TextFooter>

        </DivFooter>
    )
}

Footer.propTypes = {
    srcFootImg: PropTypes.string,
    altFootImg: PropTypes.string,
    textFooter: PropTypes.string,
}

export default Footer
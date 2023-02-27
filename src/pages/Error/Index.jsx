import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ImgEr from "../../assets/404.png"

const ErrorImg = styled.img`
    width: 597px;
    height: 263px;
    padding-left : 30%;
         
    
`

const ErrorText = styled.span`
    color: #FF6060;
    text-align : center;
    font-size: 1.5rem;
    @font-face {
        font-family: "Montserrat";
        src: url(.assets/police/Montserrat-Medium.otf);
    }

    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
    
`
const ErrorLink = styled.span`
    text-align : center;
`
const ErrorPage = styled.div`

`

const Error = () => {
    return (
        <ErrorPage>
            <ErrorImg src={ImgEr} alt="error 404 " />

            <ErrorText>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </ErrorText >

            <ErrorLink>

                <Link to="/">
                    <p>Retourner sur la page d'accueil</p>
                </Link>

            </ErrorLink>

        </ErrorPage>

    )
}



export default Error;
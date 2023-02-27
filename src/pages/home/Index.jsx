import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerHome from '../../assets/BannerHome.png';
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/LOGOblack.png"
import Card from "../../components/gallery/cart";
import styled from 'styled-components';


const GlobalStyle = styled.div`
    @font-face {
        font-family: "Montserrat";
        src: url(.assets/police/Montserrat-Medium.otf);
    }

    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
    
`

function Home() {


    return (
        <React.Fragment>
            <GlobalStyle>
                <Banner srcImage={BannerHome} altImage="Image de paysage brumeux de type falaise rocheuse en bord d'océan " textBanner="Chez vous, partout et ailleurs" />
                <Card />
                <Footer srcfootImg={Logo} altFootImg="Logo Kasa monochrome noir" textFooter="© 2020 Kasa. All rights reserved " />
            </GlobalStyle>
        </React.Fragment>
    )
}



export default Home;
import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerHome from '../../assets/BannerHome.png';
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/LOGOblack.png"


function Home() {


    return (
        <React.Fragment>
            <Banner srcImage={BannerHome} altImage="Image de paysage brumeux de type falaise rocheuse en bord d'océan " textBanner="Chez vous, partout et ailleurs" />
            <Footer srcfootImg={Logo} altFootImg="Logo Kasa monochrome noir" textFooter="© 2020 Kasa. All rights reserved " />
        </React.Fragment>
    )
}

export default Home;
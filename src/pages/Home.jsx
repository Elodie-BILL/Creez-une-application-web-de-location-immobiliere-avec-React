import React from "react";
import Banner from "../components/Banner/Banner";
import BannerHome from '../assets/BannerHome.png'


function Home() {


    return (
        <React.Fragment>
            <Banner srcImage={BannerHome} altImage="Image de paysage brumeux de type falaise rocheuse en bord d'océan " textBanner="Chez vous partout et ailleurs" />
        </React.Fragment>
    )
}

export default Home;
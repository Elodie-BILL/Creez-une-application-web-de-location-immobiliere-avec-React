import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerHome from '../../assets/BannerHome.png';
import Card from "../../components/CartLogement/Card";
import "./Home.css"
import Data from "../../data/data.json"


function Home() {

    return (

        <React.Fragment>
            <Banner srcImage={BannerHome} altImage="Image de paysage brumeux de type falaise rocheuse en bord d'océan " textBanner="Chez vous, partout et ailleurs" />
            <div className="cards-div">
                {Data.map((element) => (
                    <Card key={element.id}
                        id={element.id}
                        title={element.title}
                        cover={element.cover}
                        altText={element.title}
                    />
                ))}
            </div>


        </React.Fragment>

    )
}



export default Home;
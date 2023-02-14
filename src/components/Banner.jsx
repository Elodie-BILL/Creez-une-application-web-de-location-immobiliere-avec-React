import React from "react";
import ReactDOM from "react-dom";
import section1 from '../assets/section1.jpg'

const PicBan = {
    src: { section1 },
    alt: "Image de paysage brumeux de type falaise rocheuse en bord d'océan  "

}


const Banner = (
    <div className='banner-section1'>
        <img
            src={PicBan.src}
            alt={PicBan.alt}
        />

    </div>

);

export default Banner


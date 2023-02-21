import React from "react";

import './bannerStyle.css'

const Banner = ({ srcImage, altImage, textBanner }) => {
    return (
        <div className='banner-section1'>
            <img
                src={srcImage}
                alt={altImage}
            />
            <div className="banner-section1_p--div" >
                <p className="banner-section1_p">{textBanner} </p>
            </div>

        </div>
    )
};

//Definir les PropsTypes : https://reactjs.org/docs/typechecking-with-proptypes.html

export default Banner


import React from "react";
import './BannerStyle.css'
import PropTypes from 'prop-types';

const Banner = ({ srcImage, altImage, textBanner }) => {
    return (
        <div className="banner-section">
            <img
                src={srcImage}
                alt={altImage}
            />

            <h1>{textBanner} </h1>


        </div>
    )
};


Banner.propTypes = {
    srcImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    textBanner: PropTypes.string,
}
export default Banner;


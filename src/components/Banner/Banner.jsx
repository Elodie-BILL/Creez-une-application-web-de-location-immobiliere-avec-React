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
            <div className="banner-section_p--div" >
                <p className="banner-section_p">{textBanner} </p>
            </div>

        </div>
    )
};


//Definir les PropsTypes : https://reactjs.org/docs/typechecking-with-proptypes.html
Banner.propTypes = {
    srcImage: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    textBanner: PropTypes.string,
}
export default Banner;


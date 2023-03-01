import React, { useState } from "react";
import PropTypes from "prop-types";
import left from "../../assets/VectorRight.png";
import right from "../../assets/VectorLeft.png";
import "./Caroussel.css";



const Caroussel = ({ srcImg }) => {

    return (
        <div className="caroussel_div">
            <img className="swip_btn" id="right_btn" src={right} alt="flèche vers la droite" />
            < img className="imgDiv" src={srcImg} alt="gallery du logement proposé" />
            <img className="swip_btn" id="left_btn" src={left} alt="flèche vers la gauche" />

        </div>
    )

}

Caroussel.propTypes = {
    srcImg: PropTypes.array,
}

export default Caroussel
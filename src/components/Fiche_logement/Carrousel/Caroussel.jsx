import React, { useState } from "react";
import PropTypes from "prop-types";
import left from "../../../assets/VectorLeft.png"
import right from "../../../assets/VectorRight.png";
import "../Carrousel/Carrousel.css";


const Carrousel = ({ srcImg }) => {
    console.log(srcImg);
    const [index, setIndex] = useState(0);

    const lengthPics = srcImg.length;

    function nextPic() {
        if (srcImg[index + 1] === undefined) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    };

    function prevPic() {
        if (srcImg[index - 1] === undefined) {
            setIndex(lengthPics - 1)
        } else {
            setIndex(index - 1)
        }
    }



    return (

        <div className="carrousel_div">

            {lengthPics > 1 ? <img
                onClick={nextPic}
                className="swip_btn"
                id="right_btn" src={right}
                alt="flèche vers la droite"
            /> : undefined}

            < div className="imgDiv">
                <img className="img" src={srcImg[index]} alt="Photographies du logement" />
                {lengthPics === 1 ? undefined : <span className="numberPic"> {index + 1} / {lengthPics} </span>}
            </div>

            {lengthPics > 1 ? <img
                onClick={prevPic}
                className="swip_btn"
                id="left_btn" src={left}
                alt="flèche vers la gauche"
            /> : undefined}

        </div>
    )
}

Carrousel.propTypes = {
    srcImg: PropTypes.array.isRequired,
}
export default Carrousel;
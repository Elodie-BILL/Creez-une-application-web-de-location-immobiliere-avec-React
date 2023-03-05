import React from "react";
import PropTypes from "prop-types";
import pinkStar from "../../../assets/pink_star.svg";
import greyStar from "../../../assets/grey_star.svg"

const DisplayRating = ({ rating }) => {

    const rateToNumber = parseInt(rating, 10);
    console.log(rateToNumber);
    const scale = [1, 2, 3, 4, 5];

    return (
        <div className="ratingDiv">
            {scale.map((number) => {
                return rating < number
                    ? <img src={greyStar} alt="jolie étoile grise" />
                    : <img src={pinkStar} alt="jolie étoile rose" />
            })}
        </div>
    )


}

/**
 *  number: 1 | rating : 3 |  3 < 1 ? faux -> on renvoie l'étoile orange
 *  number: 2 | rating : 3 |  3 < 2 ? faux -> on renvoie l'étoile orange
 *  number: 3 | rating : 3 |  3 < 3 ? faux -> on renvoie l'étoile orange
 *  number: 4 | rating : 3 |  3 < 4 ? vrai -> on renvoie l'étoile grise
 *  number: 5 | rating : 3 |  3 < 5 ? vrai -> on renvoie l'étoile grise
*/

DisplayRating.prototype = {
    rating: PropTypes.string.isRequired
}

export default DisplayRating;
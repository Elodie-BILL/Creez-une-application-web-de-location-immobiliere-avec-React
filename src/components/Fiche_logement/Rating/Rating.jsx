import React from "react";
import pinkStar from "../../../assets/pink_star.svg";
import greyStar from "../../../assets/grey_star.svg"

const DisplayRating = ({ rating }) => {

    const rateToNumber = parseInt(rating, 10);
    console.log(rateToNumber);
    const scale = [1, 2, 3, 4, 5];

    return (
        <div>
            {scale.map((number) => {

                return rating < number
                    ? <img src={greyStar} alt="jolie étoile grise" />
                    : <img src={pinkStar} alt="jolie étoile grise" />


            })}
        </div>
    )


}

export default DisplayRating;
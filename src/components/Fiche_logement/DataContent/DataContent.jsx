import React from "react";
import "../DataContent/DataContent.css"



const Content = ({ title, location, tag, rating, hostName, hostPic }) => {

    const tagLength = tag.length;
    console.log(tagLength);

    return (
        <React.Fragment>
            <div>
                <h1>
                    {title}
                </h1>
                <p>
                    {location}
                </p>
                <span >
                    {tag}
                </span>
            </div>
            <div>
                <img src={rating} alt="" />
                <p>{hostName}</p>
                <img src={hostPic} alt="" />
            </div>
            <div className="ratingContent">
                {rating}

            </div>

        </React.Fragment >
        // Trouver solution ppour affiche nombre d'étoile en fonction de la note

    )

};

export default Content;
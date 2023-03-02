import React from "react";
import "../Fiche_logement/DataContent.css"



const Content = ({ title, location, tag, }) => {

    const tagLength = tag.length;
    console.log(tagLength);








    return (
        <React.Fragment>
            <h1>
                {title}
            </h1>
            <p>
                {location}
            </p>
            <span>
                {tag}
            </span>



        </React.Fragment>

    )

};

export default Content;
import React from "react";
import "../DataContent/DataContent.css"



const Content = ({ title, location, tag, rating }) => {

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

        </React.Fragment >

    )

};

export default Content;
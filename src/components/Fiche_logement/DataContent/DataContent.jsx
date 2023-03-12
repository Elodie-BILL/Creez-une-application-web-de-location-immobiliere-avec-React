import React from "react";
import PropTypes from "prop-types"
import "../DataContent/DataContent.css"



const Content = ({ title, location, tag }) => {

    const tagLength = tag.length;
    console.log(tagLength);

    return (

        <React.Fragment>
            <h1>
                {title}
            </h1>
            <p className="location_p">
                {location}
            </p>
            <span className="tag_span">
                {tag}
            </span>
        </React.Fragment>



    )

};

Content.prototype = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.array.isRequired
};

export default Content;
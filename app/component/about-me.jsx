import React from "react";

const AboutMe =({data})=> {
    const {title,body} =data;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}[0]</p>
            <p>{body}[1]</p>
        </div>
    )
}
export default AboutMe 
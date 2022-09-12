import React from "react";
import '../BlogHeadingSection/BlogHeadingSection.scss';

const BlogHeadingSection = ()=>{
    return(
        <div className="BlogHeadingSectionContainer">
            <div className="BlogHeadingSectionContent">
                <ul>
                    <li>< a href="#" >- Java Classes and Objects</a></li>
                    <li>< a href="#" >- ReactJs Functional and Class Components</a></li>
                    <li>< a href="#" >- Git commands</a></li>
                    <li>< a href="#" >- JavaScript Basics</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogHeadingSection;
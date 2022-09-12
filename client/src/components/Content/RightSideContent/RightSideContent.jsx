import React from "react";
import './RightSideStyle.scss';
import githubImage from '../../../image/GitHubImage.png';
import devImage from '../../../image/DevImage.png';
import BlogHeadingSection from "../../BlogHeadingSection/BlogHeadingSection";

const RightSideContent = ()=>{
    return(
        <div className="RightContainer">
                <div className="Image-Container">
                    <img src={devImage}></img>
                </div>
            <div className="RightContent">
            <h1 id="buildStuff">Build <span id="stuff-span">Stuff</span></h1>
            <div className="RightSubContainer1">
               <h1>- Connect me on<a href="https://github.com/tejaskulkarni28"><span id="github-id">GitHub<img id="github-image" src={githubImage}/></span></a></h1>
               <div className="para-div">
               <p1 id="p-github">Join a growing community of developers who are building stuff, learning things, and helping each other grow through the power of open source.</p1>
               </div>
            </div>
            <h1 id="buildStuff">My<span id="stuff-span">Blogs</span></h1>
            <div className="RightSubContainer1">
                <BlogHeadingSection/>
            </div>
            </div>
        </div>
    )
}

export default RightSideContent;
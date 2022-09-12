import React from "react";
import './LeftSideStyle.scss';

const LeftSideContent = ()=>{
    return(
        <div className="LeftContainer">
            <div className="LeftContent">
                <h3><span id="hii-there">Hii There! 👋</span><br/>I'M <span id="typingName">Tejas Kulkarni.</span></h3>
                <p>Post-Grad Student in Master of Computer Applications <br/>at MIT-WPU.</p>
                <p className="p-child">I'm a <span id="span">software developer.</span> I help developers build stuff,<br/> learn things, and love what they do through blog posts, tutorial videos, live streaming about tech and building open source projects.</p>
            </div>
        </div>
    )
}

export default LeftSideContent;
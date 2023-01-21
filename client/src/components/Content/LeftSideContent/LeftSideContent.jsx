import React from "react";
import './LeftSideStyle.scss';
import myPhoto from "../../../image/IMG_1883.png";

const LeftSideContent = ()=>{
    return(
        <div className="LeftContainer">
            <div className="LeftContent">
            <img id="myPhoto" src={myPhoto}/>
                <h3><span id="hii-there">Hii There! 👋</span><br/>I'M <span id="typingName">Tejas Kulkarni.</span></h3>
                <p>Post-Grad Student in Master of Computer Applications <br/>at MIT-WPU.</p>
                <p className="p-child">I'm a <span id="span">software developer.</span><br/> I help developers build 🔥cool stuff🔥,<br/> learn things, and love what they do through blog posts, tutorial videos, live streaming about tech and building open source projects.</p>
            </div>
        </div>
    )
}

export default LeftSideContent;
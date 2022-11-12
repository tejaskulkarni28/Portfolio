import React from "react";
import '../FooterContainer/FooterStyle.scss';
import githubimage from "../../image/GitHubImage.png";
import linkedIn from "../../image/linkedIn.png";
import twitter from "../../image/twitter.png";
import funny from "../../image/funny.png";
import funny1 from "../../image/funny1.png";

const Footer = ()=>{
    return(
        <div className="Footer-Container">
            <div className="Footer-Content">
                <div className="Link-Container">
                    <ul>
                        <li><img id="github-image-footer" src={githubimage}/><a href="#">GitHub</a></li>
                        <li><img id="linkedIn-image-footer" src={linkedIn}/><a href="#" id="linkedIn">LinkedIn</a></li>
                        <li><img id="twitter-image-footer" src={twitter}/><a href="#" id="twitter">Twitter</a></li>
                    </ul>
                </div>
                <div className="Ending-Section-Container">
                    <div className="Ending-Section-Content">
                        <p><span id="copyright">© Tejas Kulkarni 2022</span></p>
                        <p><img id="funny-image-footer" src={funny} />I don't track you</p>
                        <p><img id="funny-image-footer" src={funny1} />It’s not a bug. It’s an undocumented feature!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
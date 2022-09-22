import React from "react";
import '../FooterContainer/FooterStyle.scss';

const Footer = ()=>{
    return(
        <div className="Footer-Container">
            <div className="Footer-Content">
                <div className="Link-Container">
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div className="Ending-Section-Container">
                    <div className="Ending-Section-Content">
                        <p><span id="copyright">© Tejas Kulkarni 2022</span></p>
                        <p>I don't track you</p>
                        <p>Last Build</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
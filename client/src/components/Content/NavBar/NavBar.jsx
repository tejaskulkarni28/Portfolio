import React from "react";
import './NavBarStyle.scss';

const NavBar = ()=>{
    return (
        <div className="container">
            <div className = "content">
                <div className="left-nav"><h1>theCoderNoob</h1></div>
                <div className="right-nav">       
                <div className="right-nav-responsive">
                    <h2><a href="https://github.com/tejaskulkarni28?tab=repositories">Projects</a></h2>
                </div>         
             </div>
            </div>
        </div>
    )
}

export default NavBar;
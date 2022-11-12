import React from "react";
import './NavBarStyle.scss';

const NavBar = ()=>{
    return (
        <div className="container">
            <div className = "content">
                <div className="left-nav"><h1>TheCoderNoob</h1></div>
                <div className="right-nav">       
                <div className="right-nav-responsive">
                    <h2>Projects</h2>
                    <h2>Posts</h2>
                     <h2>About</h2>
                </div>         
             </div>
            </div>
        </div>
    )
}

export default NavBar;
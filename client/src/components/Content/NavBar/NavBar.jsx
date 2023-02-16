import React from "react";
import './NavBarStyle.scss';
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
    const navigate = useNavigate();
    const handleProjectButtonClick = ()=>{
        navigate('/projects')
    }
    const handleRootPageButtonClick=()=>{
        navigate('/Portfolio')
    }
    return (
        <div className="container">
            <div className = "content">
                <div className="left-nav"><h1 onClick={handleRootPageButtonClick}>TheCoderNoob</h1></div>
                <div className="right-nav">       
                <div className="right-nav-responsive">
                    <h2 onClick={handleProjectButtonClick}>Projects</h2>
                </div>         
             </div>
            </div>
        </div>
    )
}

export default NavBar;
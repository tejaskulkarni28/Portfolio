import React from "react";
import Line from "../../Line/Line";
import './ContentLayout.scss';
import LeftSideContent from "./LeftSideContent/LeftSideContent";
import NavBar from "./NavBar/NavBar";
import RightSideContent from "./RightSideContent/RightSideContent";
import '../../Line/Line';
const ContentLayout = ()=>{
    return(
        <div className="ContentLayoutContainer">
            <NavBar/>
            <div className="flex-container">
            <LeftSideContent/>
            <RightSideContent/>
            </div>
            <Line/>
        </div>
    )
}

export default ContentLayout;
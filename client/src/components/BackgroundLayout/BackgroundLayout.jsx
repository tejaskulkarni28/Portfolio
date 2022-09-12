import React from "react";
import './BackgroundLayoutStyle.scss';
import ContentLayout from "../Content/ContentLayout";

const BackgroundLayout = ()=>{
    return(
        <div className="BackgroundLayoutContainer">
            <ContentLayout/>
        </div>
    )
}

export default BackgroundLayout;
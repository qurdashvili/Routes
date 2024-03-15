import React, {Fragment} from "react";
import {Link} from "react-router-dom";

 function Main () {

    const style = {
        backgroundColor : "red",
        color : "yellow"
    };
    
    return(
        <Fragment>
            <nav>
                
            <h1 style = {style}>მთავარი&nbsp;</h1>
            <Link to={"/"}>მთავარი&nbsp;</Link>
            <Link to={"/contact"}>კონტაქტი&nbsp;</Link>
            <Link to={"/about"}>ჩვენს შესახებ&nbsp;</Link>
            </nav>
        </Fragment>
    );
}

export default Main;
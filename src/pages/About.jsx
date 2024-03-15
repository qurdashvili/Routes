import React, {Fragment} from "react";
import Main from "../App";

 function About () {

    const style = {
        backgroundColor : "green",
        color : "red"
    };
    
    return(
        <Fragment>
            <Main></Main>
            <h1 style = {style}>ჩვენს შესახებ</h1>
        </Fragment>
    );
}

export default About;
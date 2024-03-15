import React, {Fragment} from "react";
import Main from "../App";

 function Contact () {

    const style = {
        backgroundColor : "blue",
        color : "yellow"
    };
    
    return(
        <Fragment>
            <Main></Main>
            <h1 style = {style}>კონტაქტის გვერდი</h1>
        </Fragment>
    );
}

export default Contact;
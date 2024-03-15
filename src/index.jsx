import React, {Fragment} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter , Routes, Route} from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./App";


function App () {
    return(
        <Fragment>
        <BrowserRouter>
        <Routes>
            <Route index path = "/" element = {<Main/>}> </Route>
            <Route path = "/contact" elemnt = {<Contact/>}> </Route>,
            <Route path = "/about" elemnt = {<About/>}> </Route>
        </Routes>
        </BrowserRouter>
        </Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
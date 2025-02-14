import React, { useEffect, useState } from "react";
import Header from '../elements/header.js';
import Chessboard from "../elements/chessboard.js";

function Landing() {
    const [something, setsomething] = useState();
    useEffect(() => {

    })
    return(
        <>
        <Header/>
        <Chessboard/>
        </>
    );
}

export default Landing;
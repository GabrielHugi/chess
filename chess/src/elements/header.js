import React, { useEffect, useState } from "react";
import './header.css';

function Header() {
    const [something, setsomething] = useState();
    useEffect(() => {

    })
    return(
        <>
        <div className="header-element">
            <h1>Chess-T</h1>
            <div className="header-element-blocks">
                <a href="../"><p>Landing page</p></a>
                <a href="../play"><p>Quick match</p></a>
            </div>
        </div>
        </>
    );
}

export default Header;
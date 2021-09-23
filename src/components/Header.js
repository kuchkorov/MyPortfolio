import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper" id="header">
            <div className="main-info">
                <h1>web development and website promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Frontend Developer", "React", "Nodejs", "MongoDB"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header

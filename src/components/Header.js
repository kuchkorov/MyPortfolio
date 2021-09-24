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
                <a href="#contact" className="btn-main-offer">Contact Me</a>
                <div class="scroll-down" id="">
            <a href="#about">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </a>
        </div>
            </div>
        </div>
    )
}

export default Header

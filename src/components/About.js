import React from 'react';
import "./About.css";
import Avatar from "../img/avatar.svg";

const About = () => {
    return (
        <>
            <div id="about" className="about-me my-5">
                <div className="container">
                    <h1 className="text-center">About Me</h1>
                    <div className="row">
                        <div className="col-md-6 img-avatar">
                            <img src={ Avatar } className=""  />
                        </div>
                        <div className="col-md-6 about-text">
                            <h1>I am Frontend Developer</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi fugiat? Culpa autem fugiat vel atque a est, 
                                repellat dolorem. Ea minima velit eveniet? Assumenda consequatur quia culpa impedit hic, modi obcaecati eum nostrum! 
                                Necessitatibus iure ab explicabo praesentium amet accusamus sequi, 
                                deserunt facilis ipsa soluta tenetur cum earum numquam!
                            </p>
                        </div>
                    </div>
                </div>    
            </div> 
        </>
    )
}

export default About

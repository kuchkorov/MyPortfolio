import React, {useEffect} from 'react';
import "./About.css";
import Avatar from "../img/avatar.svg";
import "aos/dist/aos.css";
import AOS from 'aos';

const About = () => {

    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <div id="about" className="about-me my-5">
                <div className="container">
                    <h1 className="text-center" data-aos="fade-top" data-aos-duration="1500">About Me</h1>
                    <div className="row">
                        <div className="col-md-6 img-avatar" data-aos="fade-right" data-aos-duration="1500">
                            <img src={ Avatar } className=""  />
                        </div>
                        <div className="col-md-6 about-text" data-aos="fade-right" data-aos-duration="1500">
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

import React from "react";
import "./Skills.css";

function Skills() {
    return(
        <>
            <div className="skills" id="skill">
                <div className="container">
                    <h1 className="text-center" data-aos="fade-top" data-aos-duration="1500"> My Skills</h1>
                    <div className="row">
                        <div className="col">

                      
                    <h5 data-aos="fade-right" data-aos-duration="1500">HTML</h5>
                    <div className="skill html" data-aos="fade-right" data-aos-duration="1500">90%</div>
                    <h5 data-aos="fade-right" data-aos-duration="1500">CSS</h5>
                    <div className="skill css" data-aos="fade-right" data-aos-duration="1500">80%</div>
                    <h5 data-aos="fade-right" data-aos-duration="1500">JAVASCRIPT</h5>
                    <div className="skill js" data-aos="fade-right" data-aos-duration="1500">60%</div>
                    <h5 data-aos="fade-right" data-aos-duration="1500">REACT</h5>
                    <div className="skill React" data-aos="fade-right" data-aos-duration="1500">50%</div>
                    <h5 data-aos="fade-right" data-aos-duration="1500">NODEJS</h5>
                    <div className="skill nodejs" data-aos="fade-right" data-aos-duration="1500">30%</div>
                    <h5 data-aos="fade-right" data-aos-duration="1500">MONGODB</h5>
                    <div className="skill mongoDd" data-aos="fade-right" data-aos-duration="1500">20%</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;

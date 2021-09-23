import React from "react";
import "./Skills.css";

function Skills() {
    return(
        <>
            <div className="skills" id="skill">
                <div className="container">
                    <h1 className="text-center"> My Skills</h1>
                    <div className="row">
                        <div className="col">

                      
                    <h5>HTML</h5>
                    <div className="skill html">90%</div>
                    <h5>CSS</h5>
                    <div className="skill css">80%</div>
                    <h5>JAVASCRIPT</h5>
                    <div className="skill js">60%</div>
                    <h5>REACT</h5>
                    <div className="skill React">50%</div>
                    <h5>NODEJS</h5>
                    <div className="skill nodejs">30%</div>
                    <h5>MONGODB</h5>
                    <div className="skill mongoDd">20%</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;

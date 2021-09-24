import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <a class="navbar-brand" href="#" >Masterdeg.uz</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
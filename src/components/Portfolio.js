import React from 'react';
import "./Portfolio.css";

import gulyamov from "../img/portfolio/gulyamovorg.JPG";
import cybwelaw from "../img/portfolio/cyberlawuz.JPG";
import lingvoolam from "../img/portfolio/lingvoolauz.JPG";
import agrixim from "../img/portfolio/agriximuz.JPG";
import brokermarket from "../img/portfolio/brokermarket.uz.JPG";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <h1 className="text-center" data-aos="fade-top" data-aos-duration="1500">Portfolio</h1>
                    <div className="row pt-5">
                        <div className="col-md-3 mb-3" data-aos="fade-right" data-aos-duration="800">
                            <a href="http://cyberlaw.uz" target="_blank"><img src={ cybwelaw } alt="cyberlaw.uz" className="img-fluid" /></a>
                        </div>
                        <div className="col-md-3 mb-3" data-aos="fade-right" data-aos-duration="1000">
                            <a href="https://agrixim.uz" target="_blank"><img src={ agrixim } alt="agrixim.uz" className="img-fluid" /></a>
                        </div>
                        <div className="col-md-3 mb-3" data-aos="fade-right" data-aos-duration="1200">
                            <a href="https://brokermarket.uz" target="_blank"><img src={ brokermarket } alt="brokermarket.uz" className="img-fluid" /></a>
                        </div>
                        <div className="col-md-3" data-aos="fade-right" data-aos-duration="1500">
                            <a href="https://lingvoolam.uz" target="_blank"><img src={ lingvoolam } alt="lingvoola.uz" className="img-fluid" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;

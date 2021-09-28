import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <>
        <div className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-center  my-0">masterdeg.uz | All rights reserved</h5>   
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons text-center">
                            <i className="fas fa-phone-alt"><span style={{marginLeft: 8}}>+998 99 846-32-38</span></i>
                            <a href="https://t.me/Master_Deg" target="_blank"><i className="fa fa-telegram" style={{Color: "blue", marginLeft: 10}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer

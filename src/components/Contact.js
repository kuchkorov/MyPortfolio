import React from 'react';
import emailjs from "emailjs-com";
import "./Contact.css"

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_v668r1l",
            "template_o3uen9v",
            e.target,
            "user_djxIidOv4cY3EwyxbaSor"
            ).then(res=>{
                console.log(res);
            }).catch(err=>console.log(err));
    }
    return (
        <>
            <div className="contact-page" id="contact">
                <div className="container">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center">Please fill out the form and describe you project needs and i will contact you as soon as possible</p>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" name="Phone" className="form-control" required />
                                </div>

                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email"  name="InputEmail" className="form-control" required />
                                </div>

                                <div class="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" name="subject1" required />
                                </div>
                                <div className="form-group">
                                    <textarea  name="textarea" cols="50" rows="10" placeholder="Please describe shortly you project" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-success">Send message</button>    
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

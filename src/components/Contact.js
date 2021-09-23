import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact-page" id="contact">
                <div className="container">
                    <h1 className="text-center">Contact Us</h1>
                    <p className="text-center">Please fill out the form and describe you project needs and i will contact you as soon as possible</p>
                    <div className="row">
                        <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" required />
                            </div>
                            <div className="form-group">
                                <label for="Phone">Phone Number</label>
                                <input type="text" className="form-control" id="Phone" aria-describedby="phoneHelp" required />
                            </div>
                            <div class="form-group">
                                <label for="InputEmail1">Email address</label>
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" required />
                            </div>
                            <div class="form-group">
                                <label for="subject1">Subject</label>
                                <input type="text" className="form-control" id="subject1" required />
                            </div>
                                <button type="submit" className="btn btn-outline-success">Send</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="form-group">
                                    <label for="textarea">Message</label>
                                    <textarea name="" id="textarea" cols="80" rows="14" placeholder="Please describe shortly you project" required></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

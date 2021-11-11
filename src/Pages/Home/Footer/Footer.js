import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-primary text-white my-3">
            <div className="row">
                <div className="col-lg-4 sm-12">
                    <h3>About Us</h3>
                    <p>A camera store is a retail establishment whose primary merchandise consists of cameras and related gear</p>
                    <h6>Follow us</h6>
                    <h2><i class="fab fa-instagram"></i></h2>
                    <h2><i class="fab fa-linkedin-in"></i></h2>
                    <h2><i class="fab fa-youtube"></i></h2>
                </div>
                <div className="col-lg-4 sm-12">
                    <h3 className="py-1">Quick Links</h3>
                    <h6 className="py-1">How We Are!</h6>
                    <h6 className="py-1">Terms & Conditions!</h6>
                    <h6 className="py-1">Privacy!</h6>
                    <h6 className="py-1"> Our Awards!</h6>
                    <h6 className="py-1">Our Professionals!</h6>
                </div>
                <div className="col-lg-4 sm-12">
                    <h3 className="py-2">Get In Touch</h3>
                    <h6>Address</h6>
                    <p>Daldalia, Ulipur, Kurigram</p>
                    <h6>Call center</h6>
                    <p>+8801838860519</p>
                    <h6>Our E-mail</h6>
                    <p>picLab@yahoo.com</p>
                </div>
            </div>
            <hr />
            <div>
                <p>Privacy Policy | Copyright <i className="far fa-copyright"></i> 2021 | All right reserverd </p>
                <h6>By Authority</h6>
            </div>
        </div>
    );
};

export default Footer;
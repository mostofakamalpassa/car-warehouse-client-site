import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const FooterBoot = () => {
    return (
        <footer className="footer-area2 pt-5 mt-3 bg-primary">
      
        <div className="background-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <a href="#"><img src="images/logo2.png" alt="logo" width="179" height="45"/></a>
                            </div>
                            <p className='pt-3'>Car warehouse provides support services to US Defined Contribution Plan Third Party Administrators. Our services are based on Outsourcing model </p>
                         
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-middle">
                            <h2 className="footer-title">What We Do</h2>
                            <div className="row">
                                <div className="col-xl-12">
                                    <ul className="footer-list">
                                        <li><a href="#"><i className="fas fa-angle-right"></i>Financial Advice</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i>Planning Strategies</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i>Taxation Planning</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i>Investment Trading</a></li>
                                    </ul>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-right2">
                            <h2 className="footer-title">Get Updates!</h2>
                            <p>Sign up for our latest news &amp; articles. We won’t give you spam mails.</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter your Email"/>
                                <div className="input-group-append">
                                    <Button>Subscribe </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="footer-bottom bg-success">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center my-5">
                                <div className="copyright-area text-white">
                                    <p> &copy; Care warehouse  {new Date().getFullYear()} All Rights Reserved </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </footer>
    );
};

export default FooterBoot;
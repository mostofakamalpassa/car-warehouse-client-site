import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const FooterBoot = () => {
    return (
        <footer className="footer-area2 pt-5 mt-3 bg-secondary" style={{background:"#272422"}}>
      
        <div className="background-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <a href="#"><img src="images/logo.png" alt="logo" width="179" height="45"/></a>
                            </div>
                            <p className='pt-3 text-warning'>The Car Warehouse hosts a selection of pre-owned cars at our Swansea and Bridgend locations. Come visit and let our friendly staff help you find your next car. </p>
                         
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-middle">
                            <h2 className="footer-title text-light">What We Do</h2>
                            <div className="row">
                                <div className="col-xl-12">
                                    <ul className="footer-list">
                                        <li className='text-warning' ><i className="fas fa-angle-right"></i> HDD navigation system</li>
                                        <li className='text-warning'><i className="fas fa-angle-right"></i>front heated leather seats</li>
                                        <li className='text-warning'><i className="fas fa-angle-right"></i>adaptive cruise control</li>
                                        <li className='text-warning'><i className="fas fa-angle-right"></i>leather heated multifunction steering wheel</li>
                                    </ul>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="footer-right2">
                            <h2 className="footer-title text-light">Get Updates!</h2>
                            <p className='text-warning'>Sign up for our latest news &amp; articles. We won’t give you spam mails.</p>
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
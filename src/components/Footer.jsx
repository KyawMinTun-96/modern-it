import React from 'react';
import { NavLink } from 'react-router-dom';

const footerPage = () => {
    return(
        <footer className='bg-body-tertiary ps-5'>
            <div className='container-xl py-5'>
                <div className='row '>
                    <div className='col-md-3 py-3'>
                        <img src={require('../assets/images/logos/business-logo.png')} alt='logo img' style={{width: '70%'}}/>
                    </div>
                    <div className='col-md-3 py-3'>
                        <h1 className='fs-5'>Address</h1>
                        <p>
                            <i className="bi bi-geo-alt"></i>
                            <span>114 Naradhiwas Rajanagarindra Rd, Silom, Bang Rak, Bangkok 10500</span>
                        </p>
                    </div>
                    <div className='col-md-3 py-3'>
                        <h1 className='fs-5'>Explore</h1>
                        <ul className='ps-0 ft-link'>
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service'>Service</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to='contact'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3 py-3'>
                        <h1 className='fs-5'>Information</h1>
                        <ul className='ps-0 ft-link'>
                            <li>
                                <NavLink to='/career'>Careers</NavLink>
                            </li>
                            <li>
                                <NavLink to='/event'>Events</NavLink>
                            </li>
                            <li>
                                <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                            </li>
                        </ul>

                        <h1 className='fs-5'>Follow Us</h1>
                        <p className='ft-social'>
                            <NavLink to='https://www.facebook.com/' target='_blank'><i className="bi bi-facebook"></i></NavLink>
                            <NavLink to='https://www.linkedin.com/feed/' target='_blank'><i className="bi bi-linkedin"></i></NavLink>
                            <NavLink to='https://twitter.com' target='_blank'><i className="bi bi-twitter"></i></NavLink>
                            <NavLink to='https://youtube.com/' target='_blank'><i className="bi bi-youtube"></i></NavLink>
                            <NavLink to='https://www.instagram.com/' target='_blank'><i className="bi bi-instagram"></i></NavLink>
                        </p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center border-white border-top  copy-right'>
                <span>&copy;2024 Modern IT Co.,Ltd. All rights reserved</span>
            </div>
        </footer>
    )
}

export default footerPage;
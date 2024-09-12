import React from 'react';
import {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import GoogleMap  from './GoogleMap';

const ContactPage = () => {

    const [value, setValue] = useState('');
    const location = useLocation();
    const currentLocation = location.pathname;

    return(
        <div className='contact-us'>
            {
                currentLocation === '/contact' ? 
                (
                    <div className='contact-bg d-flex justify-content-center align-items-center'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                ) :''
            }


            <div className='bg-white d-flex flex-column align-items-center justify-content-center py-5'>
                <h2>Contact Us</h2>
                <div className='container-xl'>
                    <div className='d-flex align-items-center py-4 ct-box'>
                        <div className='d-flex justify-content-center py-3 ct-box-lt'>
                            <div className='ct-box-info'>
                                <h3>Get in Touch</h3>
                                <p>We are always glad to hear your comments regarding our services. Whether you have any questions, please do not hesitate to contact us.</p>
                                <p>
                                    <i className="bi bi-geo-alt"></i>
                                    <span>114 Naradhiwas Rajanagarindra Rd, Silom, Bang Rak, Bangkok 10500</span>
                                </p>
                                <p>
                                    <i className="bi bi-telephone"></i>
                                    <NavLink to='tel:0912345678' className='me-5'>0912345678</NavLink>
                                </p>
                                <p>
                                    <i className="bi bi-envelope"></i>
                                    <NavLink to='mailto:info@modernit.co.th'>info@modernit.co.th</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center py-3 ct-box-rt'>
                            <form className='p-3' id=''>
                                <div className='d-flex flex-row justify-content-center my-3'>
                                    <input type='text' className='form-control me-2' id='firstname' name='' placeholder='First name' required/>
                                    <input type='text' className='form-control' id='lastname' name='' placeholder='Last name' required/>
                                </div>

                                <div className='mb-3'>
                                    <input type='email' id='ct-email' className='form-control' name='' placeholder='Your email' required/>
                                </div>

                                <div className='mb-3'>
                                    <PhoneInput
                                        inputProps={{
                                            name: 'phone number',
                                            id: 'ct-phone'
                                        }}
                                        country={'us'}
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <textarea className='form-control ct-area' id='message' placeholder='message' required>

                                    </textarea>
                                </div>

                                <button className='btn btn-primary mb-3 ct-btn' style={{width: '100%'}}>Submit</button>
                                
                                <div className='d-flxex align-items-center'>
                                    <p className='ct-policy'>By contacting us, You agree to our <span>Terms<br/> of service</span> and <span>policy</span></p>
                                </div>
                            </form>
                            
                        </div>
                    </div>

                    <div className='ct-map'>
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;


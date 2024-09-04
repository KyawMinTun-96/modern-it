import React from 'react';
import {NavLink} from 'react-router-dom';

const contactPage = () => {
    return(
        <div className='contact-us'>
            <div className='container-xl'>
                <div className='d-flex flex-column align-items-center justify-content-center py-5'>
                    <h2>Contact Us</h2>
                    <div className='d-flex align-items-center py-4 ct-box'>
                        <div className='d-flex justify-content-center py-3 ct-box-lt'>
                            <div className='ct-box-info'>
                                <h3>Get in Touch</h3>
                                <p>Lorem ipsum dolor sit amet consectetur elit.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                            <form className='p-3'>
                                <div className='form-group py-2'>
                                    <input type='text' className='form-control' name='' placeholder='First name'/>
                                </div>
                                <div className='form-group py-2'>
                                    <input type='text' className='form-control' name='' placeholder='Last name'/>
                                </div>
                                <div className='form-group py-2'>
                                    <input type='email' className='form-control' name='' placeholder='Your email'/>
                                </div>
                                <div className='form-group py-2'>
                                    <input type='number' className='form-control py-2' name='' placeholder='Country Code'/>
                                </div>
                                <div className='form-group py-2'>
                                    <input type='phone' className='form-control py-2' name='' placeholder='Your phone'/>
                                </div>

                                {/* <div className='bg-dark'> */}
                                    <button className='btn btn-primary ct-btn' style={{width: '100%'}}>Submit</button>
                                {/* </div> */}
                            </form>
                        </div>
                    </div>

                    <div className='ct-map'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default contactPage;


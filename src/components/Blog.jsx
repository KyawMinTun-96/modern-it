import React from 'react';
import { NavLink } from 'react-router-dom';

const blogPage = () => {
    return(
        <div className='blog'>
            <div className='contact-bg d-flex justify-content-center align-items-center'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default blogPage;


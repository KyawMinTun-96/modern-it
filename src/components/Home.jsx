import React from 'react';
import About from './About';
import Service from './Service';
import Contact from './Contact';

const homePage = ()=> {
    return(
        <>
            <div className='jumbotron'>
                <Service/>
                <About/>
                <Contact/>
            </div>
        </>
    );
}

export default homePage;
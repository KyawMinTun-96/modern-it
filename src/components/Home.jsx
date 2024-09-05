import React from 'react';
import Contact from './Contact';
import About from './About';

const homePage = ()=> {
    return(
        <div className='container-xl'>
            <div className='jumbotron'>
                <h1>Home Page</h1>
                <About/>
                <Contact/>
            </div>
        </div>
    );
}

export default homePage;
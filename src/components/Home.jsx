import React, {useEffect} from 'react';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = ()=> {


    useEffect(() => {
        AOS.init({
            once: true,
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            //ffset: 120, // offset (in px) from the original trigger point
            //mirror: false, // whether elements should animate out while scrolling past them
            //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should
        });
        
        AOS.refresh();
    }, []);

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

export default HomePage;
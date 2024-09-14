import {NavLink, useLocation} from 'react-router-dom';
import {useState} from 'react';

const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const[isVisible, setISVisible] = useState(false);

    
    window.addEventListener('scroll', () => {
        const scrollHeight = window.pageYOffset;

        if(scrollHeight >= 57) {
            setISVisible(true);
        }if (scrollHeight <= 57) {
            setISVisible(false);
        }
    })
  
    return (
        <div>
            <div className='top-navbar bg-body-tertiary border-white border-bottom d-flex'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-md-3 border-white border-end py-3'>
                            <NavLink to='mailto:info@modernit.co.th'><i className="bi bi-envelope"></i>info@modernit.co.th</NavLink>
                        </div>
                        <div className='col-md-9  py-3'>
                            <NavLink to='tel:0912345678' className='me-5'><i className="bi bi-phone-vibrate"></i>0912345678</NavLink>
                            <NavLink to='tel:0912345678'><i className="bi bi-phone-vibrate"></i>0912345678</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={`${isVisible ? 'navbar navbar-expand-lg bg-body-tertiary py-4 second-nav' : 'navbar navbar-expand-lg bg-body-tertiary py-4'}`}>
                <div className="container-xl">
                    <NavLink className="navbar-brand nav-logo" to="/">
                        <img src={require('../assets/images/logos/business-logo.png')} alt='logo img'/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({isActive}) => {return {fontWeight: isActive ? 'bold' : 'normal'}}} aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={({isActive}) => {return {fontWeight: isActive ? 'bold' : 'normal'}}}  aria-current="page" to="/service">SERVICE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={({isActive}) => {return {fontWeight: isActive ? 'bold' : 'normal'}}}  to="/blog">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={({isActive}) => {return {fontWeight: isActive ? 'bold' : 'normal'}}}  to="/about">ABOUT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={({isActive}) => {return {fontWeight: isActive ? 'bold' : 'normal'}}}  to="/contact">CONTACT US</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {
                currentPath === '/' ? (
                    <div className='bg-body-tertiary d-flex flex-column justify-content-center align-items-center banner'>
                        <div className='container-xl d-flex justify-content-around align-items-start'>
                            <div className='banner-info' data-aos="fade-right" data-aos-offset="100"
                            data-aos-duration="1000">
                                <h1>Modern IT Co., Ltd</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='banner-img' data-aos="fade-left" data-aos-offset="100"
                                data-aos-duration="1000">
                                <img src={require('../assets/images/imgs/square.png')} alt='banner profile img'/>
                            </div>
                        </div>
                    </div>
                ) : ''
            }


        </div>
    );
}

export default NavBar;
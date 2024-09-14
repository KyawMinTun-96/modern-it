import React, { useEffect, useState } from 'react';
import  {NavLink, useLocation} from 'react-router-dom';
import serviceData from '../assets/json/service.json';

const ServcePage = ()=> {

    const[state, setState] = useState([]);
    const[firstloading, setFirstLoading] = useState(true);
    const location = useLocation();
    const currentLocation = location.pathname;

    useEffect(() => {

        setTimeout(() => {
            setState(serviceData);
            setFirstLoading(false);
        }, 1500);
    }, [state]);

    return(
        <div className='service bg-info' data-aos="fade-up"
        data-aos-duration="3000">

            {
                currentLocation === '/service' ? 
                (
                        <div className='contact-bg d-flex justify-content-center align-items-center'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Service</li>
                                </ol>
                            </nav>
                        </div>
                ) :''
            }
            
            <div className='bg-white d-flex flex-column align-items-center justify-content-center py-5 sv'>
                <div className='sv-bg'></div>
                <h2 className='mb-5'>Our Servies</h2>
                
                <div className='container-xl'>
                    <div className='row py-3' id='sv-header'>
                    {

                        firstloading ? (
                            [...Array(6)].map((_, index) => (
                                <div className='col-md-4' key={index}>
                                    <div className="card mb-4 bg-body-tertiary overflow-hidden" aria-hidden="true" style={{width: '22rem'}}>
                                        <div className='sv-logo d-flex align-items-center ps-3'>
                                            <i className='bg-white placeholder' style={{width: '50px', height: '50px', overflow: 'hidden'}}>
                                                <span className='placeholder col-13'></span>
                                            </i>
                                        </div>
                                        
                                        <div className="card-body">
                                            <h4 className="card-title mb-4 placeholder-glow">
                                                <span className="placeholder col-5"></span>
                                            </h4>
                                            <p className="card-text placeholder-glow" style={{padding: 0}}>
                                                <span className="placeholder col-8"></span>
                                            </p>
                                            <NavLink className="card-link placeholder-glow" to='/service'>
                                                <span className='placeholder col-5'></span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                        : (
                            state.map((data) => {
                                return(
                                    <div className='col-md-4' key={data.id}>
                                        <div className={data.id === 0 ? 'card mb-4 sv-active' : 'card mb-4'}>
                                            <div className='sv-logo d-flex align-items-center ps-3'>
                                                <i className={data.logo === '' ? 'bi bi-cloud' : `bi ${data.logo}`}></i>
                                            </div>
                                            
                                            <div className="card-body">
                                                <h4 className="card-title mb-4">{data.title}</h4>
                                                <p className="card-text">{data.content}</p>
                                                <NavLink to={`/service?sid=${data.id}`} className="card-link">Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServcePage;
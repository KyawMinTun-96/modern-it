import React from 'react';
import TeamData from '../assets/json/team.json';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AboutPage = () => {

    const[visibleCards, setVisibleCards] = useState(4);
    const[state, setState] = useState([]);
    const[loading, setLoading] = useState(false);
    const[firstloading, setFirstLoading] = useState(true);
    const location = useLocation();
    const currentLocation = location.pathname;

    useEffect(() => {
 
        setTimeout(() => {
            setState(TeamData);
            setFirstLoading(false);
        }, 1500);
    }, [state]);

    const handleViewMore = (() =>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisibleCards(card => card + 4);
        }, 1500);

    })


    return(
        <div className='about-us'>

            {
                currentLocation === '/about' ? 
                (
                    <div className='contact-bg d-flex justify-content-center align-items-center'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                ) :''
            }


            
            <div className='ab-tm-header bg-white d-flex flex-column align-items-center justify-content-center py-5' style={{zIndex: 99}}>
                <h2>Meet Our Team</h2>
                <p>Hello Welcome to React About Page</p>

                <div className='container-xl'>
                    <div className='row py-3 ab-tm-card'>

                        {
                            firstloading ? (
                                [...Array(4)].map((_, index) => (
                                    <div className='col-md-3' key={index}>
                                        <div className="card overflow-hidden" aria-hidden="true">
                                            <div className='ab-tm-img placeholder' style={{backgroundColor: '#d1d1df'}}>
                                            </div>
                                            <div className="card-body bg-white">
                                                <h5 className="card-title placeholder-glow text-center">
                                                    <span className="placeholder col-7"></span>
                                                </h5>
                                                <p className="card-text placeholder-glow text-center">
                                                    <span className="placeholder col-10"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )

                            :(
                                state.slice(0, visibleCards).map((data) => {
                                return(
                                    <div className='col-md-3' key={data.id}>
                                        <div className="card mb-3">
                                            <div className='ab-tm-img'>
                                                <img src={require(`../assets/images/imgs/${data.image}`)} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">{data.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            )
                        }


                        {/* Display placeholders while loading */}
                        {
                            loading && (
                                [...Array(4)].map((_, index) => (
                                    <div className='col-md-3' key={index}>
                                        <div className="card overflow-hidden" aria-hidden="true">
                                            <div className='ab-tm-img placeholder' style={{backgroundColor: '#d1d1df'}}>
                                            </div>
                                            <div className="card-body bg-white">
                                                <h5 className="card-title placeholder-glow text-center">
                                                    <span className="placeholder col-7"></span>
                                                </h5>
                                                <p className="card-text placeholder-glow text-center">
                                                    <span className="placeholder col-10"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                        <div className='d-flex justify-content-center py-3'>
                            {
                                !loading && visibleCards < state.length && (
                                    <button className='btn bg-body-tertiary ab-btn' onClick={handleViewMore}>View More</button>
                                )
                            }
                        </div>











                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
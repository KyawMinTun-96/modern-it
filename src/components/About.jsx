import React from 'react';

const aboutPage = () => {
    return(
        <div className='about-us d-flex align-items-center'>
            <div className='container-xl'>
                <div className='ab-tm-header d-flex flex-column align-items-center justify-content-center py-3'>
                    <h2>Meet Our Team</h2>
                    <p>Hello Welcome to React About Page</p>
                </div>

                <div className='row py-3 ab-tm-card'>
                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/CEO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/COO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/Project Manager.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Project Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/Senior Programmer.jpg')} className="card-img-top" alt="..." />
                            </div>
                            
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Senior Programmer</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/CEO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/CEO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/CEO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card mb-3">
                            <div className='ab-tm-img'>
                                <img src={require('../assets/images/imgs/CEO.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">Maung Maung</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center py-3'>
                        <button className='btn bg-body-tertiary ab-btn'>View More</button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default aboutPage;
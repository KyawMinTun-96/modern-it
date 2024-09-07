import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import jobs from '../assets/json/jobs.json';
import { useState, useEffect } from 'react';

const CareerPage = () => {

    const location = useLocation();
    const currentLocation = location.pathname;
    const[state, setState] = useState([]);
    const[firstloading, setFirstLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setState(jobs);
            setFirstLoading(false);
        }, 1500);
    }, [])

    return(
        <div className='career'>
            {
                currentLocation === '/career' ? 
                (
                        <div className='contact-bg d-flex justify-content-center align-items-center'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Careers</li>
                            </ol>
                        </nav>
                    </div>
                ) :''
            }

            <div className='bg-white d-flex flex-column align-items-center justify-content-center py-5 cr'>
                <h2>Join Our Teams</h2>
                <p>Open positions in <span className='text-primary'>all locations</span></p>

                <div className='container-xl'>
                    <div className='d-flex flex-lg-column justify-content-center align-items-center py-5 cr-body'>
                        <div className='cr-position'>
                            {
                                firstloading ? (
                                [...Array(5)].map((_, index) => (
                                    <div className="card mb-3 overflow-hidden" aria-hidden="true" key={index}>
                                        <div className="card-body">
                                            <div className='d-flex mb-3'>
                                                <i className="bi bi-suitcase-lg"></i>
                                                <p className='placeholder-glow'><span className='placeholder col-5'></span></p>
                                                <p className='ms-auto'>
                                                    <i className="bi bi-coin"></i>
                                                    <span>$20K-$40K <span className='text-secondary'>/year</span></span>
                                                </p>
                                            </div>
                                            <div className='d-flex flex-row justify-content-center align-items-center text-secondary'>
                                                <p className='me-3 mb-0 placeholder-glow'><span className='placeholder col-3'></span></p>
                                                <p className='mb-0 placeholder-glow'><span className='placeholder col-3'></span></p>
                                                <NavLink to="#" className="btn btn-primary ms-auto">Apply</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )))
                                :

                                (

                                    state.map((job, index) => {
                                        return(
                                            <div className="card mb-3" key={job.id}>
                                                <div className="card-body">
                                                    <div className='d-flex mb-3'>
                                                        <i className="bi bi-suitcase-lg"></i>
                                                        <p>{job.position}</p>
                                                        <p className='ms-auto'>
                                                            <i className="bi bi-coin"></i>
                                                            <span>{job.salary} <span className='text-secondary'>/year</span></span>
                                                        </p>
                                                    </div>
                                                    <div className='d-flex flex-row justify-content-center align-items-center text-secondary'>
                                                        <p className='me-3 mb-0'>{job.createdDate}</p>
                                                        <p className='mb-0'>{job.jobType}</p>
                                                        <NavLink to="#" className="btn btn-primary ms-auto">Apply</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }

                        </div>

                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href='/' alt="...">Previous</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/" alt="..">1</a>
                                </li>
                                <li className="page-item cr-active" aria-current="page">
                                    <a className="page-link" href="/" alt="..">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/" alt="..">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/" alt="..">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerPage;


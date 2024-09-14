import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import blogs from '../assets/json/blog.json';
import Pagination from './Pagination';

const BlogPage = () => {

    const [blogLoading, setBlogLoading] = useState(true);
    const [activePage, setActivePage] = useState(1);
    const blogsPerPage = 6;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    useEffect(() => {
        setTimeout(() => {
            setBlogLoading(false);
        }, 500);
    
    }, [blogLoading]);


    const handlePageClick = (page) => {

        setTimeout(() => {
            setBlogLoading(true);
            setActivePage(page);
        }, 500);

        setBlogLoading(false);
    };

 

    const currentBlogs = blogs.slice(
        (activePage - 1) * blogsPerPage,
        activePage * blogsPerPage
    );

    return (
        <div className='blog' data-aos="fade-up"
        data-aos-duration="3000">
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

            <div className='ab-tm-header bg-white d-flex flex-column align-items-center justify-content-center py-5'>
                <h2>Latest Articles</h2>
                <div className='container-xl'>
                    <div className='row py-3'>
                        {
                            blogLoading ? (
                                [...Array(6)].map((_, index) => (
                                    <div className='col-md-4' key={index}>
                                        <div className="card mb-3">
                                            <NavLink to='/blog/blog-details/' className='bg-body-tertiary blg-logo'></NavLink>
                                            <div className="card-body d-flex flex-column py-3">
                                                <p className='placeholder-glow'>
                                                    <span className='placeholder col-8'></span>
                                                </p>
                                                <p className='placeholder-glow'>
                                                    <span className='placeholder col-12'></span>
                                                </p>
                                                <p className='placeholder-glow'>
                                                    <span className='placeholder col-4'></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) :
                                currentBlogs.map((blog, key) => (
                                    <div className='col-md-4' key={key} style={{ zIndex: 99999, backgroundColor: 'white' }}>
                                        <div className="card mb-3" style={{ zIndex: 999 }}>
                                            <NavLink to='/blog/blog-details/' className='blg-logo'>
                                                <img src={require(`../assets/images/imgs/${blog.image}`)} className="card-img-top" alt="..." />
                                            </NavLink>
                                            <div className="card-body d-flex flex-column py-3">
                                                <h5 className="card-title"><NavLink to='/blog/blog-details/'>{blog.title}</NavLink></h5>
                                                <p className="card-text">{blog.content}</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>

        
                    <Pagination
                        totalPages={totalPages}
                        activePage={activePage}
                        handlePageClick={handlePageClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

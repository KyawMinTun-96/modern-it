import React from 'react';

const Pagination = ({ totalPages, activePage, handlePageClick }) => {
    const renderPageNumbers = () => {
        return [...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
                <button
                    key={page}
                    className={`page-button ${activePage === page ? 'active' : ''}`}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </button>
            );
        });
    };

    return (
        <div className='custom-pagination'>
            <button
                className='page-button'
                onClick={() => handlePageClick(activePage > 1 ? activePage - 1 : 1)}
                disabled={activePage === 1}
            >
                &laquo;
            </button>
            {renderPageNumbers()}
            <button
                className='page-button'
                onClick={() => handlePageClick(activePage < totalPages ? activePage + 1 : totalPages)}
                disabled={activePage === totalPages}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;

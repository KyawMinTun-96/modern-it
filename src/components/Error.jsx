import {Link} from 'react-router-dom';

const errorPage = () => {
    return(
        <div className="container-xl">
            <div className='d-flex flex-column align-items-center justify-content-center' style={{height: 'calc(100vh - 56px)'}}>
                <h3 className='mb-4'>Page Not Found</h3>
                <Link to='/' className='btn btn-primary'>Go Home</Link>
            </div>
        </div>
    );
}

export default errorPage;
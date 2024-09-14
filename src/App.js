import './assets/css/App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Error from './components/Error';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Career from './components/Career';
import Policy from './components/Policy';

function App() {

  const[loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <div className='App'>

      {
        loading ?
        (
          <div className='d-flex justify-content-center align-items-center bg-body-tertiary' style={{height: '100vh'}}>
            <div className="loader">
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__bar"></div>
              <div className="loader__ball"></div>
            </div>
          </div>
        )
        : 
        (
          <>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/service' element={<Service/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/career' element={<Career/>} />
              <Route path='/privacy-policy' element={<Policy/>} />
              <Route path='*' element={<Error/>} />
            </Routes>
            <Footer/>
          </>
        )
      }
    </div>
  );
}

export default App;

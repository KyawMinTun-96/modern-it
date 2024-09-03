import './assets/css/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Error from './components/Error';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Career from './components/Career';
import Policy from './components/Policy';
import Event from './components/Events';

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='*' element={<Error/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/privacy-policy' element={<Policy/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

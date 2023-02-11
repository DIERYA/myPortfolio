import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import About from './components/About';
import ContactUs from './components/ContactUs';




function App() {
  return (
    <div className="App">
     < Navbar />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
     </Routes>

    </div>
  );
}

export default App;

//url: 'mysite.com/'  <---> '/'
//url: 'mySite.com/about' <---> '/about'
//url: 'mySite.com/projects/01'  <----> '/projects/<01>'



import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar.js';
import Services from './components/Services/Services';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar'
import Works from './components/Works/Works';
import ClientReviews from './components/ClientReviews/ClientReviews'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="App" style={{backgroundColor: "#353353"}}>
     <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About  />
      <Services/>
      <Experience />
      <Works />
      <ClientReviews />
    </div>
  );
}

export default App;

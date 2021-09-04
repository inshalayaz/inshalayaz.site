import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar'
import Works from './components/Works/Works';



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
    </div>
  );
}

export default App;

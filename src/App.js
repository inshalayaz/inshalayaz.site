import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar'
import Services from './components/Services/Services';



function App() {
  return (
    <div className="App" style={{backgroundColor: "#353353"}}>
      <NavBar />
      <Hero />
      <About  />
      <Services/>
      <Experience />
    </div>
  );
}

export default App;

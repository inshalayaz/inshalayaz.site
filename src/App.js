import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App" style={{backgroundColor: "#353353"}}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;

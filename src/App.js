import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {AppContext} from './context/AppContext';

function App() {
  const [status,setStatus] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  return (
    <div className="App">
      <AppContext.Provider value={{status,setStatus,scrollNav,setScrollNav}} >  
        <Router>
          <Switch>
            <Route path="/admin" >
              <Login />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
